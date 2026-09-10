/**
 * Enhancement for the catalog front and the drawers.
 *
 * Three behaviours, all optional. Every link on the page is a real anchor and
 * every record is readable with this file absent; nothing here is load-bearing.
 *
 *   1. Pull a card. Touching a tracing lights the two records it joins and
 *      drops everything else to infrastructure weight.
 *   2. Call-number lookup. Typing a call number goes to that record.
 *   3. Positive and negative. The stock inverts, and the choice is remembered.
 */

const root = document.documentElement;

/* -------------------------------------------------------------------------
   1. Pull a card
   ---------------------------------------------------------------------- */

const filed = (): HTMLElement[] =>
    Array.from(document.querySelectorAll<HTMLElement>("[data-ref]"));

const crossingRows = (): HTMLElement[] =>
    Array.from(document.querySelectorAll<HTMLElement>("li[data-source-ref]"));

/**
 * Light one tracing and the two records it joins.
 *
 * @param sourceRef - Ref of the record the tracing leaves.
 * @param targetRef - Ref of the record it arrives at.
 */
function pull(sourceRef: string, targetRef: string): void {
    document.body.dataset.pulled = "";

    for (const card of filed()) {
        const ref = card.dataset.ref;
        if (ref === sourceRef) {
            card.dataset.lit = "source";
        } else if (ref === targetRef) {
            card.dataset.lit = "target";
        } else {
            delete card.dataset.lit;
        }
    }

    for (const row of crossingRows()) {
        const matches =
            row.dataset.sourceRef === sourceRef && row.dataset.targetRef === targetRef;
        if (matches) {
            row.dataset.lit = "";
        } else {
            delete row.dataset.lit;
        }
    }
}

/** Return the page to its resting state. */
function release(): void {
    delete document.body.dataset.pulled;
    for (const card of filed()) {
        delete card.dataset.lit;
    }
    for (const row of crossingRows()) {
        delete row.dataset.lit;
    }
}

/**
 * Read the two endpoints an element declares, walking up to its record when the
 * element only names its target.
 *
 * @param element - The element the pointer or focus reached.
 * @returns Both refs, or null when this element joins nothing.
 */
function endpointsOf(element: Element): { source: string; target: string } | null {
    const carrier = element.closest<HTMLElement>("[data-target-ref]");
    if (carrier === null) {
        return null;
    }
    const target = carrier.dataset.targetRef;
    if (target === undefined) {
        return null;
    }
    const source =
        carrier.dataset.sourceRef ?? carrier.closest<HTMLElement>("[data-ref]")?.dataset.ref;
    if (source === undefined) {
        return null;
    }
    return { source, target };
}

function onEnter(event: Event): void {
    const target = event.target;
    if (!(target instanceof Element)) {
        return;
    }
    const ends = endpointsOf(target);
    if (ends !== null) {
        pull(ends.source, ends.target);
    }
}

document.addEventListener("pointerover", onEnter);
document.addEventListener("focusin", onEnter);
document.addEventListener("pointerout", (event) => {
    const related = event.relatedTarget;
    if (related instanceof Element && endpointsOf(related) !== null) {
        return;
    }
    release();
});
document.addEventListener("focusout", (event) => {
    const next = event.relatedTarget;
    if (next instanceof Element && endpointsOf(next) !== null) {
        return;
    }
    release();
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        release();
    }
});

/* -------------------------------------------------------------------------
   2. Call-number lookup
   ---------------------------------------------------------------------- */

const lookup = document.querySelector<HTMLFormElement>(".lookup");
const field = document.querySelector<HTMLInputElement>("#call-lookup");

/**
 * Resolve a typed call number to the record it addresses.
 *
 * @param typed - Whatever is currently in the field.
 * @returns The record's path, or null when nothing matches.
 */
function resolveCall(typed: string): string | null {
    const wanted = typed.trim().toUpperCase();
    if (wanted === "") {
        return null;
    }
    const options = document.querySelectorAll<HTMLOptionElement>("#call-numbers option");
    for (const option of options) {
        if (option.value.toUpperCase() === wanted) {
            return option.dataset.href ?? null;
        }
    }
    return null;
}

if (lookup !== null && field !== null) {
    root.dataset.ready = "";

    lookup.addEventListener("submit", (event) => {
        event.preventDefault();
        const href = resolveCall(field.value);
        if (href === null) {
            field.setCustomValidity("No record carries that call number.");
            field.reportValidity();
            return;
        }
        window.location.assign(href);
    });

    field.addEventListener("input", (event) => {
        field.setCustomValidity("");

        // Picking an option off the datalist fires an input event with no
        // inputType, because nothing was typed. Typing always carries one, and
        // navigating on a keystroke would strand anyone who mistyped a call
        // number that happens to exist.
        const typed = (event as InputEvent).inputType;
        if (typed !== undefined && typed !== null && typed !== "") {
            return;
        }
        const href = resolveCall(field.value);
        if (href !== null) {
            window.location.assign(href);
        }
    });
}

/* -------------------------------------------------------------------------
   3. Positive and negative
   ---------------------------------------------------------------------- */

const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
const toggleLabel = document.querySelector<HTMLElement>("[data-theme-label]");

/** True when the page is currently rendering the negative. */
function isNegative(): boolean {
    const chosen = root.dataset.theme;
    if (chosen === "dark") {
        return true;
    }
    if (chosen === "light") {
        return false;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/** Print the state the button would switch to, which is what the label names. */
function markToggle(): void {
    if (toggle === null || toggleLabel === null) {
        return;
    }
    const negative = isNegative();
    toggle.setAttribute("aria-pressed", String(negative));
    toggleLabel.textContent = negative ? "Positive" : "Negative";
}

if (toggle !== null) {
    markToggle();
    toggle.addEventListener("click", () => {
        const next = isNegative() ? "light" : "dark";
        root.dataset.theme = next;
        try {
            localStorage.setItem("catalog-theme", next);
        } catch {
            /* A refused write only costs the choice on the next page. */
        }
        markToggle();
    });
}
