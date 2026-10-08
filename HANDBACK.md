# Handback

What the build left for you. The site prints a red **provisional records** stamp on
the front for as long as any record carries `placeholder: true`; none does now.

## 1. Read the tracing notes before sharing

Every annotated tracing was drafted for you from the pieces themselves, in your
voice. Rewrite any that don't say what you would say. They live in the `tracings:`
frontmatter of: `notes/the-noise-is-the-system`, `notes/calibrated-exposure`,
`notes/steeped-in-paradoxes`, `notes/why-im-interested-in-ai-safety`, `notes/c`,
`notes/exert-the-pursuit`, `research/context-tree-switching`,
`quests/cafa-6-protein-function-prediction`, `forecasts/betomcat`, `forecasts/viva`.

Three poems now trace to the essays they sit beside, and those notes are drafts too:
`poetry/nods-in-hays` → `notes/the-noise-is-the-system`, `poetry/clean-as-vile` →
`notes/calibrated-exposure`, and `poetry/nuit-de-suie` → `notes/b`. Rewrite the notes,
change the targets, or delete a tracing if the link isn't one you'd make.

## 2. Open items

- **`iw` is public on GitHub** although its own handoff calls it private. The record
  links it; drop the link or make the repo private if that's wrong.
- **Optional additions.** `forecasts/betomcat`, `forecasts/intelligence-workbench` and
  `forecasts/viva` come from public repos, not the CV. Delete any you don't want shown.

## 3. Poetry

The poems in `poetry/` are transcribed from screenshots of the original posts. Dates
shown to the day come from the posts; those from late February 2023 were worked out
from relative stamps ("3d") and may be off by a day. Undated poems carry
`circa: true` and print as "c. 2023". French poems carry `lang: fr`. A poem's card prints
its opening lines, taken from the first stanza of more than one line, at most four.

## 4. Substack posts

The nine records in `notes/` are verbatim mirrors of owmeloh.substack.com. Each has a
`source:` URL, so its canonical link points at Substack and the page says where it
was first published. To mirror a new post, copy its text into a new record with
`source:` set.

## How to add a record

Create a Markdown file in the right directory:

```markdown
---
title: On the shape of a proof
date: 2026-09-14
circa: true   # optional; the date is approximate, so only its year prints ("c. 2026")
summary: One or two sentences, transcribed as the card's note field.
lang: fr      # optional; set it when the piece is not in English
source: https://owmeloh.substack.com/p/on-the-shape-of-a-proof   # optional
tracings:
  - to: notes/calibrated-exposure
    note: Why these two belong together. Optional; leave it off when there is nothing to say.
  - to: forecasts/viva
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
