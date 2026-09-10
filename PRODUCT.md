# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro with content collections. Chosen by the principal over Astro+Keystatic and Eleventy. Content lives
as Markdown/MDX in the repository with typed frontmatter schemas per collection, so adding a content type
later means adding a collection and a schema rather than reworking the site. Zero client JavaScript by
default. Deploy target undecided; any static host satisfies the build.

## Users

Three audiences arrive at the same front door and the site does not segment for them:

- **Graduate admissions readers and academic contacts**, scanning for research legitimacy under time
  pressure, generally with many tabs open. They need a searchable identity and a formal record.
- **Essay and poetry readers**, arriving from a link elsewhere, deciding within a viewport whether this
  body of work is worth their attention.
- **Personal contacts**, curious what the principal has been working on.

No visitor persona is primary. The principal explicitly rejected audience-segmented sections.

## Product Purpose

A personal corpus that demonstrates a cross-domain intellectual identity through explicit, hand-authored
links between individual pieces, rather than through category labels, taxonomy, or an "about me"
narrative. Success is a visitor understanding, from the homepage alone, that formal methods research,
poetry, forecasting, and journal notes are one practice rather than four hobbies, because the connections
between them are visible and authored.

## Positioning

The connective tissue is the content. A conventional blog or portfolio asserts a unified identity in an
About page and then files posts under categories; this site inverts that. The links a piece declares to
other pieces, and the reasoning attached to those links where the principal chose to write it, are
first-class published material. A neighboring personal site could copy the visual system but not the
corpus of authored relations, which only accumulates by hand.

## Operating Context

- Content is authored as Markdown in the repository, in an editor, not a browser CMS.
- Publishing happens by commit. The principal maintains the site himself and will add new content types
  over time, not merely new posts.
- Existing material is a mix of finished pieces and fragments, so the system needs a draft state that
  keeps unfinished work out of the public build and out of the public link graph.
- Reading happens both on a laptop in a browsing session with many tabs and on a phone from a shared link.

## Capabilities and Constraints

- **Four content types at launch**: formal methods research, poetry, forecasting, journal-style notes.
  Flat structure, no hierarchical taxonomy, no tag system at launch.
- **A fifth surface**: a CV page, built inside the same system rather than as an attached document.
  Confirmed by the principal as necessary for the graduate-admissions audience.
- **Link model**: links are hand-authored per piece and point at other pieces. Annotation is optional —
  a link may carry a line of the principal's reasoning, or may be bare. The principal chose this
  explicitly, knowing the bare form will dominate in practice. Any design that depends on annotations
  existing is therefore wrong; annotation must read as an enrichment on a system that is already legible
  without it.
- **Extensibility is a hard requirement**: adding a content type must not require redesigning the
  homepage, the link model, or the navigation.
- **Draft state required**: fragmentary pieces stay out of the production build and the link graph.
- No comments, no analytics commitment, no newsletter, no search backend confirmed at launch.
- Deploy target and domain configuration are open decisions.

## Brand Commitments

- Published under the principal's full name, with a public email address, both required for the
  graduate-admissions audience to treat the identity as searchable and contactable.
- **Binding visual constraint stated by the principal**: the design register must itself read as formal
  methods — systematic, precise, strongly gridded, typographically driven, restrained in ornament. It is
  explicitly not warm or personal, and explicitly not minimal-quiet. This is a constraint on the visual
  world, recorded here because the principal made it binding, not expanded into a direction.

## Evidence on Hand

- No content is committed to the repository yet. The repository contains a README and a stray `$HOME`
  directory created by an earlier shell mishap, unrelated to this work.
- The principal holds a mix of finished and fragmentary pieces outside the repository, not yet inventoried
  here.
- No publications list, citation record, talks, teaching record, or institutional affiliation has been
  confirmed. Future work must not fabricate any of these, and must not invent titles, venues, dates, or
  metrics for the CV.
- Any placeholder content authored during the build is illustrative and must be labeled as such and
  handed back for replacement.

## Product Principles

1. **Structure carries the argument.** The site's claim about a unified identity is made by visible
   relations between pieces, never by a paragraph asserting it.
2. **Flat now, extensible always.** No taxonomy is added before the corpus demands one, and no design
   decision may assume the current four content types are the final set.
3. **Degrade toward the bare case.** Optional enrichments — annotated links, long pieces, dense
   clusters — are upside. Everything must read as deliberate when a piece is short, unlinked, or new.
4. **One front door.** No audience-specific sections, entry points, or framings, even though three
   distinct audiences arrive.
5. **The corpus is small and will stay honest.** The system must look considered at ten pieces, not only
   at two hundred.

## Accessibility & Inclusion

No principal-specific requirement was established. Standard obligations apply: the connective structure
must be conveyed to assistive technology as real links and text, never only as a visual pattern, and no
information may be carried by color alone.
