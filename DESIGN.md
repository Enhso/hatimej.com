---
name: The Catalog
description: A card catalog whose cross-references are the published work — flat, ruled, and typographically driven.
colors:
  stock: "#e4e6e9"
  stock-lit: "#edeff2"
  stock-sunk: "#d9dbdf"
  ink: "#17181a"
  ink-soft: "#55575a"
  ribbon: "#b4232a"
  line: "#b9bcb4"
  line-faint: "#d2d4cd"
  tab-research: "#1b4b9e"
  tab-poetry: "#7a2e6d"
  tab-forecasts: "#8a4e00"
  tab-notes: "#1f6b4a"
  stock-negative: "#131416"
  stock-lit-negative: "#1b1d20"
  stock-sunk-negative: "#0d0e10"
  ink-negative: "#e4e5e0"
  ink-soft-negative: "#9a9c98"
  ribbon-negative: "#e85d62"
  line-negative: "#3a3d40"
  line-faint-negative: "#2a2c2f"
  tab-research-negative: "#6e9ee8"
  tab-poetry-negative: "#c98bc0"
  tab-forecasts-negative: "#e0a040"
  tab-notes-negative: "#57ba8c"
typography:
  display:
    fontFamily: "Libre Franklin Variable, Libre Franklin, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 6.4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Libre Franklin Variable, Libre Franklin, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 5.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Libre Franklin Variable, Libre Franklin, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: "1.5rem"
    letterSpacing: "-0.008em"
  body:
    fontFamily: "Spline Sans Mono Variable, Spline Sans Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: "1.25rem"
    letterSpacing: "normal"
    fontFeature: "tabular-nums"
  reading:
    fontFamily: "Source Serif 4 Variable, Source Serif 4, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: "1.75rem"
    letterSpacing: "normal"
  label:
    fontFamily: "Libre Franklin Variable, Libre Franklin, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.5625rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.09em"
  call:
    fontFamily: "Spline Sans Mono Variable, Spline Sans Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: "1.25rem"
    letterSpacing: "0.02em"
    fontFeature: "tabular-nums, no ligatures"
rounded:
  none: "0"
spacing:
  atom: "0.625rem"
  hair: "0.25rem"
  tight: "0.5rem"
  step: "0.75rem"
  line: "1rem"
  block: "1.5rem"
  band: "2rem"
  section: "3rem"
  page: "5rem"
components:
  guide-tab:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.1875rem 0.75rem 0.1875rem 0.25rem"
  guide-tab-hover:
    textColor: "{colors.ink}"
  guide-tab-current:
    textColor: "{colors.ink}"
  class-mark:
    backgroundColor: "{colors.tab-research}"
    textColor: "{colors.stock}"
    rounded: "{rounded.none}"
    size: "1.6em"
  call-number:
    textColor: "{colors.tab-research}"
    typography: "{typography.call}"
  filed-card:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem 0"
  filed-card-pulled:
    backgroundColor: "{colors.stock-lit}"
  tracing:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 0 0.0625rem"
  tracing-hover:
    backgroundColor: "{colors.stock-sunk}"
  lookup-field:
    backgroundColor: "{colors.stock-sunk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.1875rem 0.375rem"
    width: "8ch"
  theme-toggle:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.1875rem 0"
  theme-toggle-hover:
    textColor: "{colors.ink}"
  provisional-stamp:
    textColor: "{colors.ribbon}"
    rounded: "{rounded.none}"
    padding: "0.375rem 0.75rem"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
    rounded: "{rounded.none}"
    padding: "0.5rem 1rem"
---

# Design System: The Catalog

## Overview

**Creative North Star: "The Card Catalog and Its Tracings"**

This is a library card catalog rendered as a website. A catalog card carries a heading, a
statement of what the thing is, and at its foot the tracings: the hand-written record of every
other card in the drawer this work connects to. Here those tracings are the published material.
The apparatus of filing — the guide tab, the call number, the ruled register, the continuous rail
rod down the left edge — is not decoration applied to a blog. It is the argument, made visible:
four bodies of work are one practice because the connections between them are drawn and named.

The register is institutional rather than personal. Cool grey card stock, near-black typewriter
ink, and a bichrome ribbon whose red does one job. Density is high and deliberate: a filed record
prints its class, its accession date and its tracings in eleven-pixel type without apology,
because a reader scanning for legitimacy under time pressure wants the record, not an atmosphere.
Nothing is warm, nothing is soft, and nothing is quiet-minimal either — the page is crowded with
rules and marks, all of them load-bearing.

Depth does not exist here. There is no shadow, no elevation, no blur and no gradient anywhere in
the system. Layers separate by rule weight and ground value alone, the way ink on card separates
from ink on card. Every measurement in the system descends from one atom or from a character
advance of the record face, so a rule that meets a rail meets it exactly.

**Key Characteristics:**

- Absolutely flat: three rule weights and three ground values carry every layer.
- One geometry: a 10px atom (`--u`) and the record face's character advance generate every measure.
- Three voices with three jobs: signage announces, monospace states the record, serif reads.
- Red is reserved: cross-references and corrections, nowhere else.
- Class colour is structural, never decorative, and never the only carrier of a fact.
- Certainty prints as stroke weight; absence prints as an explicit line.
- Square corners everywhere. Radius is zero and always has been.

## Colors

A cool grey card stock in two polarities, a single reserved red, and four class colours held at
matched darkness so no drawer outranks another.

### Primary

- **Ribbon Red** (`ribbon`): The second colour of a bichrome typewriter ribbon. It marks
  cross-references and corrections and nothing else — the connector between two ends of a
  crossing, the rule under a tracing, the provisional stamp, a field awaiting real data, the
  count of tracings that leave their class, the focus ring, the caret and the selection ground.
  In the negative it lightens so it stays a mark rather than a hole.

### Secondary

The four guide-tab colours, one per class in the schedule. Each is set near 43–49% lightness in
the positive and near 70% in the negative, so all four read as peers on the same tab strip.

- **Schedule Blue** (`tab-research`): Formal methods, class mark R.
- **Schedule Plum** (`tab-poetry`): Poetry, class mark P.
- **Schedule Tobacco** (`tab-forecasts`): Forecasting, class mark F.
- **Schedule Viridian** (`tab-notes`): Notes, class mark N.

### Neutral

- **Card Stock** (`stock`): The page ground and the running head's ground. Also the ink used
  *inside* a filled class mark and on the skip link, so a coloured chip prints its letter in stock.
- **Lit Stock** (`stock-lit`): The one-step-brighter ground that a pulled card takes while its
  tracing is lit. The only ground change in the system that means "selected".
- **Sunk Stock** (`stock-sunk`): The one-step-darker ground for inset surfaces — the lookup
  field, code and pre blocks, a hovered tracing, and the diagonal cells of the traffic matrix.
- **Typewriter Ink** (`ink`): All primary text, and the 2px heavy rule.
- **Soft Ink** (`ink-soft`): Statements of responsibility, glosses, captions, numerals, class
  headings, and every record dropped to infrastructure weight while another card is pulled.
- **Rule** (`line`): The main 1px rule and the continuous rail rod.
- **Faint Rule** (`line-faint`): The hairline 1px rule that separates filed records from each
  other and draws the traffic matrix.

### Named Rules

**The Reserved Ribbon Rule.** Red means a cross-reference or a correction. It is never a fill,
never a hover ground, never an accent chosen because a section looked flat. Its only grounds in
the whole system are the text selection highlight and the interior of the provisional stamp's
1px border, both of which are marks. If a new surface wants red for emphasis, the answer is a
heavier rule or a darker ground.

**The Tab-Only Rule.** A class colour appears on three things: the class mark, the call number,
and the class's entry in the schedule. It never enters body text, never becomes a ground behind
prose, and never carries information alone — every coloured mark is accompanied by its letter and
its heading in text.

**The Four Edits Rule.** Adding a content type is exactly four edits and no redesign: a row in
`CLASSES`, a line in `src/content.config.ts`, a `--tab-<letter>` variable pair plus its
`[data-class]` rule in the stylesheet, and a content directory. Any component that would need a
fifth edit is wrong and must resolve its colour through `var(--tab)` instead.

## Typography

**Display Font:** Libre Franklin Variable (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Spline Sans Mono Variable (with ui-monospace, SF Mono, Menlo, monospace)
**Reading Font:** Source Serif 4 Variable (with Georgia, serif)

All three are self-hosted variable faces, bundled with the build. No webfont CDN, no system
display stack, no synthetic bold.

**Character:** A grotesque set as institutional signage, a monospace that behaves like the
catalog's own hand, and a serif that appears only where someone actually reads. The pairing is
the sound of an institution that types its records and sets its prose.

### Hierarchy

- **Display** (800, `clamp(2rem, 6.4vw, 3.5rem)`, 0.94, tracking -0.025em, uppercase): The
  catalog name on the front, once per page at most.
- **Headline** (800, `clamp(1.75rem, 5.6vw, 3rem)`, 0.9, tracking -0.015em, uppercase): The
  SEE ALSO banner. A record's own title uses the same face and weight at
  `clamp(1.5rem, 4.4vw, 2.5rem)` and stays in sentence case, because it is a title, not signage.
  A drawer's heading sits lower at `clamp(1.25rem, 3.2vw, 1.75rem)`.
- **Title** (600, 17px, 24px line, tracking -0.008em, max 44ch): The heading on a filed record in
  the register. Sentence case.
- **Body / the record voice** (400, 13px, 20px line, tabular figures): The document default. It
  needs no class — statements, dates, counts, glosses and the whole catalog apparatus are set in
  it. Small sizes step down through 12px, 11px and 9px on the same 20px rhythm.
- **Reading** (400, 17px, 28px line, max 68ch): Essays, poems and research prose only. Verse
  keeps its authored line breaks at a 52ch measure and never wraps to the reading measure.
- **Label** (700, 9px, tracking 0.09em, uppercase): Guide-tab headings, field labels, extent
  terms, band headings, the class name on a cross-reference. The signage voice at its smallest.
- **Call number** (600, 13px, tracking 0.02em, ligatures off, no wrapping): Always in its class
  colour, always keyable, always the same width per character.

### Named Rules

**The Three Voices Rule.** Signage announces, the record states, the serif reads. A face never
takes another's job: no serif headings, no monospace running prose, no grotesque body copy. If a
new element does not obviously announce, state or read, it states.

**The Data Voice Rule.** The monospace is the catalog's handwriting, not a technical costume. It
carries call numbers, dates, counts and every tabular figure because those must align and be
typed back, not because the site wants to look like a terminal. It never appears as a stylistic
flourish on prose.

## Layout

The page is a sheet at most 78rem wide with 2rem of side margin, centred, sharing that exact
container with the running head and the foot so all three align on the same edges.

The spine of the system is **the filed grid**: a `--rail` column of 7.5ch — enough for a
four-character call number and its band — then a 1.5rem gutter, then the field. Anything filed
uses it, and the rail carries a `--rule-main` on its inner edge. On the front page the rod runs
further: one unbroken 1px vertical rule painted the full height of the page at the rail's inner
edge, with every section hanging off it and the register's records reaching back across it to
put their call numbers in the rail.

Vertical rhythm descends from `--u` (10px). The record line is 2u; reading prose sits on 2.8u;
verse on 2.9u. The reused block steps are 0.4u, 0.8u, 1.2u, 1.6u, 2.4u, 3.2u, 4.8u and 8u. A
filed record is padded 2.4u block-wise; a section band 4.8u; the gap before the foot 8u.

Measures are set in characters, not pixels: 68ch for reading prose, 62ch for a scope note, 58ch
for a summary, 52ch for verse and the colophon, 44ch for a record title, 26ch for a record's
display title.

**Responsive behaviour** turns on a single breakpoint at 46rem (736px). Below it: the filed grid
lies down, so the rail becomes a horizontal band with its rule running underneath, exactly as a
rule runs under the heading on a filed card. The rod is not drawn, because there is no rail to
hang it on. The running head stops being sticky and its tab headings drop, leaving the coloured
class marks alone. The front page reorders so the traffic matrix falls below the crossings it
summarises, and each crossing's connector rotates to run vertically between its two ends.

### Named Rules

**The One Geometry Rule.** Every rule, rail, tab, gap, connector and pad is a multiple of `--u`
or a character advance of the record face. There are no arbitrary pixel values and no second
spacing scale. A value that cannot be expressed as `calc(var(--u) * n)` or as `Nch` does not
belong in this system.

**The Continuous Rod Rule.** On the front, the rail rule is one unbroken line from the top of the
page to the bottom. Sections do not each draw their own rail segment; they hang off the single
rod. Anything that breaks the rod — a full-bleed band, a centred block, a section with its own
left margin — is wrong.

## Elevation & Depth

There is no elevation. This system has no shadows, no `filter`, no `backdrop-filter`, no
gradients and no translucency, in either polarity. The only `linear-gradient` in the codebase is
a two-stop solid used to paint the 1px rail rod, which is a rule drawn as a background, not a
gradient effect. Depth is carried entirely by two mechanisms: **rule weight** and **ground value**.

### Rule Vocabulary

- **Hairline** (`1px solid line-faint`): Separates peers. Between filed records, between rows of
  an apparatus band, around the cells of the traffic matrix, above a record's tracings line.
- **Main** (`1px solid line`): Separates a part from its container. The rail's inner edge, the
  rod, the underline beneath a heading in reading prose, the base of the lookup field.
- **Heavy** (`2px solid ink`): Separates a section from the document. Under the running head,
  above and below the SEE ALSO card, under a section banner, above the apparatus, above the foot.

### Ground Vocabulary

Three values, one step apart: `stock-sunk` for inset surfaces, `stock` for the page, `stock-lit`
for a pulled card. That is the entire z-axis.

### Named Rules

**The Absolute Flatness Rule.** No shadow, no elevation, no blur, no gradient, no glow, anywhere,
ever, including on hover and focus. This is a rule, not an omission. A surface that needs to
separate gets a heavier rule or the next ground value.

**The Three Weights Rule.** Hairline separates peers, main separates parts, heavy separates
sections. A fourth weight is not available; if three do not express the hierarchy, the hierarchy
is wrong.

## Shapes

Every corner in the system is square. There is no `border-radius` anywhere in the source, and
none may be added: a card catalog is cut and filed, not rounded. Form is made entirely by
rectangles and by the rules that bound them.

Two silhouettes recur. The **class mark** is a filled square of exactly 1.6em on a side (1.7em on
the CV's count marks), holding one uppercase letter in stock ink, centred by grid placement so
the letter sits optically true. The **band** is a full-width horizontal region bounded above or
below by a rule of a stated weight, with its heading and its gloss sharing a last-baseline row.
Everything else in the system is a rule, a rail or a run of type.

Borders are always solid and always 1px, 2px or 3px. Nothing is dashed, dotted or double.

### Named Rules

**The Square Corner Rule.** Radius is zero on every element in every state. If a control looks
unfinished square, it needs a rule or a ground, not a corner.

## Components

### Guide Tabs (navigation)

Institutional signage across the top of every page: the catalog name, then one tab per class, then
the tools. A tab is its class mark — a filled square in the class colour with the letter in stock
— followed by its heading in label type. The mark is the only coloured thing; the heading is soft
ink, going full ink on hover and focus. The current drawer prints its heading at weight 800 with a
2px underline in its own tab colour, so the current page is stated twice, by weight and by rule.
The running head is sticky on desktop with a heavy rule at its base and a stock ground; below
46rem it releases to static and the headings drop, leaving the marks. The CV is the fifth tab,
class mark A, and takes the default ink mark because it is an authority record, not a class.

### Call Numbers

The catalog's address system and its only search affordance. A call number is a class letter and
a three-digit number, set in the record face at weight 600 with ligatures off and no wrapping,
coloured by its class. It appears in the rail of every filed record, at both ends of every
crossing, and beside every tracing. In the rail it is a bare link that grows a 1px underline in
its own colour on hover; when its record is the target of a pulled tracing it takes a 2px
underline instead.

### Filed Records (cards)

- **Corner Style:** Square (0).
- **Background:** Page stock. `stock-lit` only while pulled as the source of a lit tracing.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** A hairline rule at the block end, separating it from the next record.
- **Internal Padding:** 2.4u block, zero inline — the record's edges are the field's edges.
- **Anatomy:** Call number in the rail; title in signage at 17px/600; a statement line giving the
  class label and the accession date in ISO form; an optional summary in the reading face at
  15px; and always, last, the tracings line above its own hairline rule.

### Tracings and Crossings (signature)

The system's reason for existing. A tracing is a link from one record to another, printed as its
roman numeral, its target's call number, and a red rule beneath. On the front page a crossing
prints as a full row: roman numeral, source end, a red connector rule spanning the space between,
target end, and a scope note indented beneath when one was written. The connector is the drawing
of the relation, which is why it is red and why it spans real distance across the row.

**Hover and focus** are handled by a single behaviour, *pull a card*: touching either end of a
tracing lights that tracing and both records it joins, drops every other record's title and
summary to soft ink, and drops every other connector from ribbon to rule grey. Escape releases it.
The behaviour is progressive enhancement; with the script absent every tracing is still a real
anchor and every record still reads.

### Lookup Field (input)

- **Style:** A sunk stock ground, no side or top border, and a `--rule-main` under the baseline.
  Text is uppercased, weight 600, tracked 0.04em, 8ch wide — the width of the thing it holds.
- **Focus:** The base rule turns ribbon red. The focus ring is a 2px ribbon outline offset 2px,
  which is the system-wide focus treatment on every focusable element.
- **Error:** Native constraint validation, with the message "No record carries that call number."
- **Availability:** The field is `display: none` until the enhancement script marks the document
  ready. A control that cannot work never renders; the register on the front is the full index
  without it.

### Theme Toggle (button)

Label type, soft ink, no ground, a hairline rule under it, and a word that names the state it
would switch to: "Negative" or "Positive". On hover both the text and its rule go to full ink. The
chosen polarity is written to local storage and applied before first paint by an inline script,
so the stock never flashes.

### Traffic Matrix

A square from-class-to-class table of tracing counts, ruled hairline, headed by class marks in
their own colours. Counts off the diagonal are ribbon red at weight 600 because they cross a class
boundary; counts on the diagonal are soft ink at weight 400 on sunk stock because they stay home;
a zero prints as a middle dot rather than a numeral. Every mark has a visually hidden heading, and
the caption states the rule in words, so the colour carries nothing on its own.

### Provisional Stamp

Label type in ribbon red inside a 1px ribbon border, printed only while at least one record in the
build is still illustrative. It removes itself when the real corpus lands.

### Named Rules

**The Weight-Not-Opacity Rule.** Certainty renders as stroke weight. An annotated tracing prints
its rule at 3px; a bare one prints at 1px. Opacity is never the carrier, in this or in any other
state — the pulled state changes colour and weight, never alpha.

**The Absence Prints Rule.** A record with no tracings still prints its tracings line, reading
"none recorded". An apparatus band with nothing in it still prints, reading "None recorded." The
catalog does not pretend to a completeness it lacks, and the bare case is the designed case, not
the degraded one.

**The Flick Rule.** Cards are flicked, not eased. State changes are hard cuts: 90ms on
`steps(2, end)`, which is a two-frame register shift, not a fade. No transitions on grounds, no
float-ins, no scroll reveals, no entrance animation of any kind. Under reduced motion every
transition and animation drops to 0ms.

## Do's and Don'ts

### Do:

- **Do** separate layers with rule weight and ground value. Hairline for peers, main for parts,
  heavy (2px ink) for sections; `stock-sunk`, `stock`, `stock-lit` for the three grounds.
- **Do** express every measurement as `calc(var(--u) * n)` or as a character count. The atom is
  0.625rem and the record line is 2u.
- **Do** print absence explicitly. An empty list gets a line saying so, in soft ink, in the
  record voice.
- **Do** carry certainty in stroke weight: 3px for an annotated relation, 1px for a bare one.
- **Do** resolve class colour through `var(--tab, var(--ink))` so a new class needs no new
  component code.
- **Do** pair every coloured mark with its letter and its heading in text, and give hidden
  headings to marks that stand alone in a table.
- **Do** keep the reading face for reading: prose, poems, and a record's summary. Everything else
  is the record voice.
- **Do** hide a control that depends on the enhancement script until the script marks the
  document ready.

### Don't:

- **Don't** add a shadow, gradient, blur, glow or translucency anywhere, in any state, in either
  polarity. There are none in the system now and the flatness is the world.
- **Don't** round a corner. Radius is zero everywhere.
- **Don't** use ribbon red as a ground, a hover fill, or a decorative accent. It marks
  cross-references and corrections only.
- **Don't** let a class colour into body text, into a prose background, or into a position where
  it is the only thing carrying a fact.
- **Don't** use opacity to express weight, state or hierarchy. Change the colour or the rule.
- **Don't** animate an entrance. No fades, no float-ins, no scroll reveals; state changes are
  hard cuts under 120ms.
- **Don't** introduce a fourth rule weight, a fourth ground value, or a second spacing scale.
- **Don't** set prose in the monospace or headings in the serif.
- **Don't** design anything that assumes annotations exist. A catalog of entirely bare tracings
  must read as finished.
- **Don't** break the rail rod on the front page with a full-bleed band or a section that sets
  its own left margin.
