# slidev-theme-lfds

A retro-terminal theme for [Slidev](https://github.com/slidevjs/slidev):
Roboto type, a phosphor palette, augmented (cut-corner) frames, and dashed
links.

- **Type** — Roboto Condensed (display), Roboto (body), Roboto Mono (labels/code)
- **Palette** — a phosphor set (blue · cyan · green · magenta · red · yellow · orange) on black, with full light + dark themes
- **Corners** — cut corners via [`augmented-ui`](https://augmented-ui.com)
- **Surfaces** — squared hairlines, dashed links, sharp accent focus outlines

## Install

```bash
npm i -D slidev-theme-lfds
# or: pnpm add -D slidev-theme-lfds / bun add -d slidev-theme-lfds
```

Add the theme to your `slides.md` headmatter:

```yaml
---
theme: lfds
---
```

## Layouts

| Layout | Purpose |
|---|---|
| `cover` | Title slide with a grid wash and display-scale title |
| `intro` | Same family as `cover` |
| `section` | Centered divider |
| `statement` | Full-bleed statement at display scale |
| `fact` | Oversized number + caption |
| `quote` | Pull quote with an accent mark |
| `end` | Closing slide |

Built-in layouts (`default`, `center`, `two-cols`, …) remain available and are
styled by LFDS.

## Components

- **`<AugFrame>`** — a panel with top-right / bottom-left cut corners.
  Props: `accent`, `secondary`.
- **`<Kicker>`** — an uppercase mono label with an accent marker.
- **`<Tag>`** — a small squared tag. Props: `variant` (`accent` | `secondary`).

```md
<AugFrame accent>

#### A framed panel

</AugFrame>

<Kicker>section 01</Kicker> <Tag variant="accent">new</Tag>
```

## Utilities

`.link` (dashed underline) · `.kicker` · `.tag` · `.panel` · `.aug-frame` ·
`.cols` / `.cols-3` · `.muted` · `.accent-text` · `.secondary-text` ·
`.mono` · `.display` · `.footnote` · `.swatches` / `.swatch`

## Design tokens

All tokens live in `styles/tokens.css` and switch with `html.dark`:

`--background` · `--foreground` · `--background-secondary` ·
`--foreground-secondary` · `--primary` · `--secondary` · `--accent` ·
`--destructive` · `--muted` · `--card` · `--border` · `--ring` · `--edge` ·
`--blue` / `--cyan` / `--green` / `--magenta` / `--red` / `--yellow` /
`--orange` · `--gray-1..3`

They are also exposed as UnoCSS utilities (`bg-background`, `text-accent`,
`border-edge`, `font-display`, …), so you can style slides directly:

```html
<div class="text-accent border border-edge font-display">…</div>
```

## Development

```bash
bun install
bun run dev        # preview example.md
bun run screenshot # render example.md to PNGs
bun run export     # render example.md to PDF
```

## License

MIT
