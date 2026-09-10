# hatimej.com

A personal catalog. Four classes of work — formal methods, poetry, forecasting, notes —
indexed by hand-authored tracings between individual pieces rather than by categories or
an about page.

A library card catalog carries, at the foot of every card, a list of every other card in
the drawer that this work connects to. A librarian writes them by hand; they are not
derived from shared vocabulary and no algorithm produces them. That list is the model
here, and the cross-reference card, which contains nothing but relations, is the
homepage.

## Running it

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview
npm run check      # types and Astro diagnostics
```

## Layout

```
src/
  content/<class>/*.md      records, one file per piece
  content.config.ts         the schema every class shares
  lib/classes.ts            the classification schedule: add a content type here
  lib/catalog.ts            call numbers, tracing resolution, reverse tracings
  lib/authority.ts          the CV, as an authority record
  lib/site.ts               name and public email
  components/               guide card, cross-reference card, drawer, apparatus
  styles/catalog.css        the whole design system
  scripts/catalog.ts        optional enhancement; nothing here is load-bearing
```

Routes are `/`, `/<class>`, `/<class>/<record>`, `/cv`, and a 404.

## Adding work

See [HANDBACK.md](HANDBACK.md) for the frontmatter shape, how tracings and draft state
behave, and the four edits that add a new content type. It also lists which of the
current records are illustrative and need replacing.
