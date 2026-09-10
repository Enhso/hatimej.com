# Handback

Everything the build authored that is not yours, and what to do with it. The site
prints a red **provisional records** stamp on the front and on the CV for as long as
any of it is still in place, and the stamps remove themselves when it is gone.

## 1. The thirteen records are illustrative

Every file under `src/content/` was written during the build to give the catalog a
real lattice to render. They are in your domains and your registers, but they are not
your writing. Each carries `placeholder: true` in its frontmatter, which is what
prints "Provisional" on the card and keeps the stamp up.

| Class | Files |
|---|---|
| `research/` | compression-as-understanding, decidable-boundaries, invariants-you-cannot-name |
| `poetry/` | legibility-of-loss, a-proof-with-nothing-to-prove, casablanca-in-october |
| `forecasts/` | resolution-criteria-are-the-question, calibration-review-q2, forecasting-my-own-projects |
| `notes/` | the-legitimacy-loop, on-being-wrong-in-public, half-ass-it-with-everything, what-a-drawer-is-for |

Replace or delete them. When you add your own, drop `placeholder: true` from the
frontmatter. One exception worth keeping: `notes/what-a-drawer-is-for` explains the
tracing model to a first-time visitor, so it is worth rewriting rather than deleting.

**The numbers in `forecasts/calibration-review-q2` and `forecasts/forecasting-my-own-projects`
are invented.** Ninety-one resolved questions, the reliability figures, the twelve
projects and their overrun multiples: none of it is real data. Delete or replace those
two files before the site is public. They read as factual claims about your record.

## 2. The CV is a structure with no facts in it

`src/lib/authority.ts` holds the CV as a MARC-style authority record. The heading,
variant names, fields of activity and location are real. Everything marked
`provisional: true` is a prompt telling you what belongs there:

- `373` associated group — institution, programme, dates
- `374` occupation — current position and dates
- `678` biographical data — education
- `670` source data found — publications, preprints, talks, datasets

Nothing was invented for these. An empty field is honest; delete a line rather than
fill it with something plausible.

## 3. Identity constants

`src/lib/site.ts` carries the name and the public email in one place.

```ts
name: "Hatim El Jazouli",
email: "hatim.eljazouli@proton.me",
```

The surname was derived from your account of record, not stated by you, and the address
is the one on that account. Change the constant if either is wrong or if you want a
different public address.

## 4. Deploy

`astro.config.mjs` sets `site: "https://ht.me"`. Change it if the domain differs; it
feeds canonical URLs and Open Graph tags. No deploy target is configured. Any static
host serves `dist/` as-is.

## How to add a record

Create a Markdown file in the right directory:

```markdown
---
title: On the shape of a proof
date: 2026-09-14
summary: One or two sentences, transcribed as the card's note field.
tracings:
  - to: poetry/legibility-of-loss
    note: Why these two belong together. Optional; leave it off when there is nothing to say.
  - to: forecasts/calibration-review-q2
---

The body.
```

`draft: true` keeps a record out of the build and out of the link graph entirely, so a
tracing pointing at a draft is dropped rather than shipping a dead link.

## How to add a content type

Four edits, no redesign:

1. A row in `CLASSES` in `src/lib/classes.ts` (id, one-letter class mark, headings).
2. A line in `collections` in `src/content.config.ts`.
3. A `--tab-<letter>` pair in both palettes in `src/styles/catalog.css`, plus its
   `[data-class="<id>"]` rule.
4. The directory `src/content/<id>/`.

Call numbers, the traffic cross-tabulation, the guide tabs, the drawer route and the
cross-reference card all pick it up on the next build.
