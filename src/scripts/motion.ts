/**
 * Motion for the catalog front, the drawers and the records.
 *
 * The motion itself is stepped CSS in motion.css. This file decides when it
 * runs, numbers the things that need an order, and makes one pass of dice per
 * page load so that no two visits are quite alike. Nothing here is
 * load-bearing: with it absent every page is complete, and an opening that has
 * already started plays out on its own and ends on the finished page.
 *
 *   1. The opening. Once per session the head script sets data-opening. This
 *      measures the heading and types it by hand, at the uneven pace of a
 *      person, numbers what is stamped, drawn or flicked in (with a few
 *      milliseconds of jitter, and the tabs in shuffled order), and ends the
 *      sequence on a timer or the first touch.
 *   2. Scroll stamps. Records that start below the fold stay where they are;
 *      when one arrives, its call number, tag or numeral is struck.
 *   3. Irregularities, all of them small. About one stamped mark in four rests
 *      a degree off true. Half the pages with a register have one misfiled card
 *      that straightens when touched. Tab marks lift by a different amount
 *      each time. Now and then, once, a tab mark shows a lookalike for a blink.
 *
 * Everything random is off under reduced motion.
 */

// Marks this file a module, so its names stay out of the global scope it
// would otherwise share with catalog.ts.
export {};

const root = document.documentElement;
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const all = (selector: string): HTMLElement[] =>
    Array.from(document.querySelectorAll<HTMLElement>(selector));

/** True when the element starts below the first screenful. */
const belowFold = (element: HTMLElement): boolean =>
    element.getBoundingClientRect().top >= window.innerHeight;

/** A number from low up to high. */
const between = (low: number, high: number): number => low + Math.random() * (high - low);

/** True with the given probability. */
const chance = (probability: number): boolean => Math.random() < probability;

/** Plus or minus one. */
const either = (): number => (Math.random() < 0.5 ? -1 : 1);

/** A copy of the list in random order. */
function shuffled<T>(items: T[]): T[] {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
        const other = Math.floor(Math.random() * (index + 1));
        [copy[index], copy[other]] = [copy[other] as T, copy[index] as T];
    }
    return copy;
}

/**
 * Give each element its place in line and a little jitter, for the stagger in
 * motion.css.
 *
 * @param elements - Elements in the order they should play.
 */
function number(elements: HTMLElement[]): void {
    elements.forEach((element, index) => {
        element.style.setProperty("--i", String(index));
        element.style.setProperty("--j", `${Math.round(between(-25, 25))}ms`);
    });
}

/**
 * About one mark in four comes to rest slightly off true, and stays there. It
 * is simply set down that way: a mark with a transition (the tab marks) is not
 * allowed to slide into it.
 *
 * @param mark - A stamped mark.
 */
function askew(mark: HTMLElement | null): void {
    if (mark !== null && chance(0.25)) {
        mark.style.transition = "none";
        mark.style.setProperty("--askew", `${(either() * between(0.4, 1.1)).toFixed(2)}deg`);
        mark.dataset.askew = "";
        void mark.offsetWidth;
        mark.style.transition = "";
    }
}

/* -------------------------------------------------------------------------
   1. The opening
   ---------------------------------------------------------------------- */

/** The page's main heading: front, authority record, drawer, 404, record. */
const HEADING = ".guide .name, .authority .name, .sheet > .register .heading, .miss h1, .record .title";

/** Records that flick in with the opening. */
const FLICKED = ".register .card, .authority .field, .record > *";

/** How long the opening may run before the page is handed back. */
const OPENING_MS = 2200;

/** The most records that flick in with the opening. */
const FLICK_CAP = 10;

/** The longest the keystrokes of a heading may take, stutter aside. */
const TYPING_MS = 800;

/** One half of a caret blink. */
const BLINK_MS = 110;

/** Animations motion.ts started itself, which the CSS cannot take back. */
const mine: Animation[] = [];

let timer: number | undefined;

/** True when the heading's text runs onto more than one line. */
function wraps(heading: HTMLElement): boolean {
    const text = document.createRange();
    text.selectNodeContents(heading);
    return text.getClientRects().length > 1;
}

/**
 * Size the regular typewriter to its line, or send a heading that wraps to the
 * flick.
 *
 * @param heading - The heading to be typed.
 */
function measure(heading: HTMLElement): void {
    if (wraps(heading)) {
        heading.dataset.wrapped = "";
        return;
    }
    heading.style.setProperty("--chars", String(heading.textContent?.trim().length ?? 0));
}

/**
 * Type the heading by hand: each keystroke lands after its own gap, the reveal
 * edge and the caret sit on the measured edge of each glyph, and about one
 * opening in three the typist hesitates, backs up a letter and carries on.
 * No wrong glyph is ever shown. The regular CSS typing is already running and
 * stands down in the same task, so nothing flashes.
 *
 * @param heading - The heading to be typed.
 */
async function typeByHand(heading: HTMLElement): Promise<void> {
    const text = heading.firstChild;
    if (!(text instanceof Text) || heading.childNodes.length !== 1) {
        return;
    }
    // Measuring lays the page out, which starts any font it needs; the glyph
    // edges are only true once that font is in.
    heading.getBoundingClientRect();
    await document.fonts.ready;
    if (root.dataset.opening === undefined || wraps(heading)) {
        return;
    }

    const origin = heading.getBoundingClientRect().left;
    const width = heading.getBoundingClientRect().width;
    const caret = parseFloat(getComputedStyle(heading).fontSize) * 0.5;
    const range = document.createRange();
    const edges = [0];
    for (let count = 1; count <= text.length; count += 1) {
        range.setStart(text, 0);
        range.setEnd(text, count);
        edges.push(range.getBoundingClientRect().right - origin);
    }
    edges[text.length] = width;

    // The stops: when, in ms from the first keystroke, and where the edge is.
    const gaps = edges.slice(1).map(() => between(35, 110));
    const pace = Math.min(1, TYPING_MS / gaps.reduce((sum, gap) => sum + gap, 0));
    const stutter = text.length >= 4 && chance(1 / 3) ? 2 + Math.floor(Math.random() * (text.length - 3)) : -1;
    const stops: [number, number][] = [[0, 0]];
    let at = 0;
    gaps.forEach((gap, index) => {
        const count = index + 1;
        at += gap * pace;
        stops.push([at, edges[count] as number]);
        if (count === stutter) {
            at += between(60, 120);
            stops.push([at, edges[count - 1] as number]);
            at += between(160, 320);
            stops.push([at, edges[count] as number]);
        }
    });

    const css = heading.getAnimations().find((animation) => animation instanceof CSSAnimation);
    const begin = parseFloat(getComputedStyle(root).getPropertyValue("--at-type")) - Number(css?.currentTime ?? 0);
    const hold = "steps(1, end)";
    const frames = (property: string, value: (edge: number) => string): Keyframe[] =>
        stops.map(([when, edge]) => ({ offset: when / at, [property]: value(edge), easing: hold }));

    const blinks = 1 + Math.floor(Math.random() * 3);
    const blink: Keyframe[] = Array.from({ length: blinks * 2 }, (_, half) => ({
        offset: half / (blinks * 2),
        visibility: half % 2 === 0 ? "visible" : "hidden",
        easing: hold,
    }));
    blink.push({ offset: 1, visibility: "hidden" });

    heading.dataset.typed = "";
    mine.push(
        heading.animate(frames("clipPath", (edge) => `inset(-0.2em ${width - edge - caret}px -0.2em 0)`), {
            duration: at,
            delay: begin,
            fill: "backwards",
        }),
        heading.animate(frames("insetInlineStart", (edge) => `${edge}px`), {
            duration: at,
            delay: begin,
            fill: "both",
            pseudoElement: "::after",
        }),
        heading.animate(blink, {
            duration: blinks * 2 * BLINK_MS,
            delay: begin + at,
            fill: "both",
            pseudoElement: "::after",
        }),
    );
}

/** Hand the page back, wherever the sequence has got to. */
function end(): void {
    window.clearTimeout(timer);
    document.removeEventListener("pointerdown", end);
    document.removeEventListener("keydown", end);
    for (const animation of mine) {
        animation.cancel();
    }
    delete root.dataset.opening;
}

/** Prepare the opening the head script asked for, and arrange its ending. */
function open(): void {
    const heading = document.querySelector<HTMLElement>(HEADING);
    if (heading !== null) {
        measure(heading);
        if (heading.dataset.wrapped === undefined) {
            void typeByHand(heading);
        }
    }

    number(shuffled(all(".tab")));
    number(all(".extent dd"));
    number(all(".traffic td.count"));
    number(all(".seealso .link"));

    const first = all(FLICKED)
        .filter((element) => !belowFold(element))
        .slice(0, FLICK_CAP);
    number(first);
    for (const element of first) {
        element.dataset.flick = "";
    }

    timer = window.setTimeout(end, OPENING_MS);
    document.addEventListener("pointerdown", end);
    document.addEventListener("keydown", end);
}

if (root.dataset.opening !== undefined) {
    open();
}

/* -------------------------------------------------------------------------
   2. Scroll stamps
   ---------------------------------------------------------------------- */

const ARRIVING = ".register .card, .authority .field, .apparatus .item";

/** The one mark of each kind of record that is struck when it arrives. */
const MARK = ".rail .call, .tag, .numeral";

if (!reduced && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                const record = entry.target;
                if (entry.isIntersecting && record instanceof HTMLElement) {
                    record.dataset.pop = "";
                    record.addEventListener("animationend", () => delete record.dataset.pop, { once: true });
                    askew(record.querySelector<HTMLElement>(MARK));
                    observer.unobserve(record);
                }
            }
        },
        { threshold: 0 },
    );

    for (const element of all(ARRIVING)) {
        if (belowFold(element)) {
            observer.observe(element);
        }
    }
}

/* -------------------------------------------------------------------------
   3. Irregularities
   ---------------------------------------------------------------------- */

/** The tab mark that looks like each letter, near enough, at a glance. */
const LOOKALIKE: Record<string, string> = { R: "P", P: "R", F: "E", N: "M", Q: "O", A: "4" };

if (!reduced) {
    for (const mark of all(".extent dd, .tab[aria-current='page'] .tab-code")) {
        askew(mark);
    }

    // One card, never the first two, was filed a hair out of true.
    const cards = all(".register .card");
    if (cards.length > 2 && chance(0.5)) {
        const card = cards[2 + Math.floor(Math.random() * (cards.length - 2))] as HTMLElement;
        card.style.setProperty("--mis-x", `${(either() * between(1, 2)).toFixed(1)}px`);
        card.style.setProperty("--mis-r", `${(either() * between(0.15, 0.3)).toFixed(2)}deg`);
        card.dataset.misfiled = "";
        card.addEventListener("pointerenter", () => (card.dataset.straight = ""), { once: true });
    }

    // Each touch of a tab lifts its mark a different amount, with a tilt.
    for (const tab of all(".tab")) {
        const mark = tab.querySelector<HTMLElement>(".tab-code");
        tab.addEventListener("pointerenter", () => {
            mark?.style.setProperty("--lift", `${Math.floor(between(2, 6))}px`);
            mark?.style.setProperty("--tilt", `${between(-3, 3).toFixed(1)}deg`);
        });
    }

    // Rarely, once: a tab mark shows its lookalike for two held frames. The
    // tab keeps its aria-label, so nothing is announced.
    const marks = all(".tab-code").filter((mark) => (mark.textContent ?? "").trim() in LOOKALIKE);
    if (marks.length > 0 && chance(0.15)) {
        const mark = marks[Math.floor(Math.random() * marks.length)] as HTMLElement;
        window.setTimeout(() => {
            const real = mark.textContent ?? "";
            mark.textContent = LOOKALIKE[real.trim()] as string;
            window.setTimeout(() => (mark.textContent = real), 120);
        }, between(4000, 12000));
    }
}
