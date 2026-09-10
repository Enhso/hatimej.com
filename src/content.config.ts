import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * A tracing: one hand-authored pointer from this entry to another.
 *
 * `note` is deliberately optional. A tracing with a note is an annotated
 * cross-reference and prints at full weight; a bare tracing prints hairline.
 * Nothing in the catalog may depend on notes existing.
 */
const tracing = z.object({
    /** Target entry, written as `<collection>/<file-stem>`, e.g. `poetry/legibility-of-loss`. */
    to: z.string().regex(/^[a-z0-9-]+\/[a-z0-9-]+$/, "expected <collection>/<entry-id>"),
    /** Why these two pieces connect, in the author's own words. */
    note: z.string().optional(),
});

/**
 * The record shared by every collection.
 *
 * Adding a content type means adding a row to `CLASSES` and a directory under
 * `src/content/`. It never means changing this schema or the pages that read it.
 */
const record = z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** Drafts are excluded from the build and from the link graph entirely. */
    draft: z.boolean().default(false),
    /** Transcribed as the card's note field. One or two sentences. */
    summary: z.string().optional(),
    tracings: z.array(tracing).default([]),
    /** Pins a call number that would otherwise be assigned by date order. */
    callNumber: z.string().optional(),
    /** Marks an illustrative record authored during the build, awaiting real content. */
    placeholder: z.boolean().default(false),
});

export type Record = z.infer<typeof record>;
export type Tracing = z.infer<typeof tracing>;

const drawer = (id: string) =>
    defineCollection({
        loader: glob({ base: `./src/content/${id}`, pattern: "**/*.md" }),
        schema: record,
    });

// Listed literally rather than mapped from CLASSES so Astro can infer collection
// names as string literals. Adding a content type is three edits: a row in
// CLASSES, a line here, and a directory under src/content/.
export const collections = {
    research: drawer("research"),
    poetry: drawer("poetry"),
    forecasts: drawer("forecasts"),
    notes: drawer("notes"),
};
