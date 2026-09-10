import { getCollection, type CollectionEntry } from "astro:content";
import { CLASSES, classOf, type CatalogClass, type ClassId } from "./classes";

/** The first call number issued in each class. */
const FIRST_CALL_NUMBER = 101;

/** One resolved tracing: a pointer that survived draft filtering. */
export interface ResolvedTracing {
    /** The entry the tracing points at. */
    target: Entry;
    /** The author's reason for the connection, when one was written. */
    note?: string;
    /** True when source and target sit in different classes. */
    crossClass: boolean;
}

/** A catalog entry: one piece, with its call number and its resolved apparatus. */
export interface Entry {
    /** Collection name plus file stem, e.g. `poetry/legibility-of-loss`. */
    ref: string;
    /** File stem alone. */
    id: string;
    href: string;
    title: string;
    date: Date;
    summary?: string;
    placeholder: boolean;
    klass: CatalogClass;
    /** Class mark plus sequence, e.g. `P203`. Keyable, and unique. */
    callNumber: string;
    /** Tracings this entry declares, in the order the author wrote them. */
    tracings: ResolvedTracing[];
    /** Entries that trace to this one. The catalog's added entries. */
    tracedBy: ResolvedTracing[];
    /** Rendered by `render()` at the point of use. */
    entry: CollectionEntry<ClassId>;
}

/** The whole catalog, with the derived views the pages need. */
export interface Catalog {
    entries: Entry[];
    /** Every entry, keyed by `<collection>/<id>`. */
    byRef: Map<string, Entry>;
    /** Cross-class tracings only, newest source first. This is the front door's body. */
    crossings: Crossing[];
    /** Counts of tracings from one class to another, including the diagonal. */
    traffic: Traffic;
    /** True when any record in the build is still illustrative. */
    provisional: boolean;
    lastAccession?: Date;
}

/** One cross-class tracing, flattened for printing on the cross-reference card. */
export interface Crossing {
    source: Entry;
    target: Entry;
    note?: string;
}

/** A square tabulation of tracing counts, class by class. */
export interface Traffic {
    classes: readonly CatalogClass[];
    /** `count(from, to)` for every ordered pair in schedule order. */
    rows: { from: CatalogClass; cells: { to: CatalogClass; count: number }[] }[];
    /** Tracings whose endpoints sit in different classes. */
    crossTotal: number;
    /** Tracings whose endpoints share a class. */
    withinTotal: number;
}

function compareByDate(a: { date: Date }, b: { date: Date }): number {
    return a.date.getTime() - b.date.getTime();
}

/**
 * Read every collection, assign call numbers, and resolve the tracing apparatus.
 *
 * Drafts are dropped before anything else, so a draft can neither appear in the
 * build nor be reached by a tracing. A tracing pointing at a missing or drafted
 * entry is dropped with a build-time warning rather than failing the build,
 * because a half-written cross-reference should not stop the site from shipping.
 *
 * @returns The catalog and its derived views.
 */
export async function loadCatalog(): Promise<Catalog> {
    const entries: Entry[] = [];

    for (const klass of CLASSES) {
        const published = (await getCollection(klass.id as ClassId)).filter(
            (item) => item.data.draft !== true,
        );
        published.sort((a, b) => compareByDate(a.data, b.data));

        published.forEach((item, index) => {
            const callNumber =
                item.data.callNumber ?? `${klass.code}${FIRST_CALL_NUMBER + index}`;
            entries.push({
                ref: `${klass.id}/${item.id}`,
                id: item.id,
                href: `/${klass.id}/${item.id}`,
                title: item.data.title,
                date: item.data.date,
                summary: item.data.summary,
                placeholder: item.data.placeholder,
                klass,
                callNumber,
                tracings: [],
                tracedBy: [],
                entry: item,
            });
        });
    }

    const byRef = new Map(entries.map((entry) => [entry.ref, entry]));

    for (const source of entries) {
        for (const declared of source.entry.data.tracings) {
            const target = byRef.get(declared.to);
            if (target === undefined) {
                console.warn(
                    `[catalog] ${source.ref} traces to "${declared.to}", which is not a published entry. Dropped.`,
                );
                continue;
            }
            if (target.ref === source.ref) {
                console.warn(`[catalog] ${source.ref} traces to itself. Dropped.`);
                continue;
            }
            const crossClass = target.klass.id !== source.klass.id;
            source.tracings.push({ target, note: declared.note, crossClass });
            target.tracedBy.push({ target: source, note: declared.note, crossClass });
        }
    }

    entries.sort((a, b) => compareByDate(b, a));

    const crossings: Crossing[] = [];
    for (const source of entries) {
        for (const tracing of source.tracings) {
            if (tracing.crossClass) {
                crossings.push({ source, target: tracing.target, note: tracing.note });
            }
        }
    }

    return {
        entries,
        byRef,
        crossings,
        traffic: tabulate(entries),
        provisional: entries.some((entry) => entry.placeholder),
        lastAccession: entries[0]?.date,
    };
}

/**
 * Cross-tabulate tracing counts from every class to every class.
 *
 * @param entries - Every published entry, with tracings already resolved.
 * @returns The square tabulation printed beside the catalog's extent.
 */
function tabulate(entries: Entry[]): Traffic {
    const counts = new Map<string, number>();
    let crossTotal = 0;
    let withinTotal = 0;

    for (const source of entries) {
        for (const tracing of source.tracings) {
            const key = `${source.klass.id}>${tracing.target.klass.id}`;
            counts.set(key, (counts.get(key) ?? 0) + 1);
            if (tracing.crossClass) {
                crossTotal += 1;
            } else {
                withinTotal += 1;
            }
        }
    }

    return {
        classes: CLASSES,
        rows: CLASSES.map((from) => ({
            from,
            cells: CLASSES.map((to) => ({
                to,
                count: counts.get(`${from.id}>${to.id}`) ?? 0,
            })),
        })),
        crossTotal,
        withinTotal,
    };
}

/** Roman numerals for the tracings column. Catalogs number added entries this way. */
const ROMAN: readonly string[] = [
    "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
    "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX",
];

/**
 * The tracing numeral for a zero-based position.
 *
 * @param index - Position in the tracings list.
 * @returns A Roman numeral, falling back to Arabic past the twentieth tracing.
 */
export function numeral(index: number): string {
    return ROMAN[index] ?? String(index + 1);
}

/**
 * Format a date as the catalog's accession form.
 *
 * @param date - The date to transcribe.
 * @returns An ISO calendar date, which is what a record carries.
 */
export function accession(date: Date): string {
    return date.toISOString().slice(0, 10);
}

export { classOf, CLASSES };
