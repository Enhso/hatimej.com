/**
 * The classification schedule.
 *
 * Each class is one drawer of the catalog: a content type, its single-letter
 * class mark, the guide-tab colour that identifies it, and the heading printed
 * on its tab. Order here is the order tabs appear across the drawer.
 *
 * To add a content type: add a row, add the matching line to
 * `src/content.config.ts`, add a `--tab-<code>` pair to `src/styles/catalog.css`,
 * and create `src/content/<id>/`. Nothing else in the site needs to change.
 */
export interface CatalogClass {
    /** Collection name, and the first path segment of every entry's URL. */
    id: string;
    /** Class mark. One uppercase letter, unique across the schedule. */
    code: string;
    /** Printed on the guide tab, in the signage voice. */
    heading: string;
    /** Used in running prose and in a record's class statement. */
    label: string;
}

export const CLASSES: readonly CatalogClass[] = [
    { id: "research", code: "R", heading: "FORMAL METHODS", label: "Formal methods" },
    { id: "poetry", code: "P", heading: "POETRY", label: "Poetry" },
    { id: "forecasts", code: "F", heading: "FORECASTING", label: "Forecasting" },
    { id: "notes", code: "N", heading: "NOTES", label: "Notes" },
] as const;

const BY_ID = new Map(CLASSES.map((klass) => [klass.id, klass]));

/**
 * Look up a class by collection name.
 *
 * @param id - Collection name, e.g. `poetry`.
 * @returns The class record.
 * @throws If `id` names no class in the schedule.
 */
export function classOf(id: string): CatalogClass {
    const klass = BY_ID.get(id);
    if (klass === undefined) {
        throw new Error(`no class in the schedule for collection "${id}"`);
    }
    return klass;
}

/** Collection names, in schedule order. Narrowed for `getCollection`. */
export type ClassId = "research" | "poetry" | "forecasts" | "notes";
