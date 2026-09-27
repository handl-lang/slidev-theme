# slidev-theme-lfds

A retro-terminal theme for [Slidev](https://github.com/slidevjs/slidev), built
from the design system used on [luisfuturist.com](https://luisfuturist.com):
Roboto type, a phosphor palette, augmented (cut-corner) frames, `--foreground`
hairlines and bracketed mono CTAs.

- **Type** — Roboto Condensed (display), Roboto (body, set light), Roboto Mono (labels/code), Roboto Flex (numerals)
- **Palette** — a phosphor set on black, with full light + dark themes
- **Corners** — cut corners via [`augmented-ui`](https://augmented-ui.com): 12px on small frames, `--aug-size` (responsive 32/40/48px) on large ones
- **Surfaces** — `--foreground` hairlines, dashed links, sharp accent focus outlines, inverted foreground blocks

## Colour roles

The theme follows the site's discipline — it is essentially monochrome:

| Token | Role |
|---|---|
| `--foreground` (= `--primary`) | the main colour — all text and hairlines |
| `--background-secondary` | surfaces (frames, code, table heads) |
| `--background` | the page |
| `--accent` (orange) | **interaction only** — focus, selection, open state |
| `--link-primary-hover` | hovered links and CTAs |
| `--muted` | de-emphasised text |

Orange and magenta are **not** decorative. Emphasis is expressed by *inverting*
(a `--foreground` fill), not by tinting — exactly as the site's Contact CTA does.

## Install

```bash
npm i -D slidev-theme-lfds
```

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
| `fact` | Oversized Roboto Flex numeral + mono caption |
| `quote` | Pull quote |
| `end` | **Inverted** closing slide (foreground fill, background text) |

Built-in layouts (`default`, `center`, `two-cols`, …) remain available and are
styled by LFDS.

## Components

- **`<AugFrame>`** — a panel with cut corners. Props: `inverted` (foreground
  fill, background text), `size` (`sm` cuts top-right + bottom-left at 12px;
  `lg` cuts every corner at `--aug-size`).
- **`<Kicker>`** — a mono, uppercase, letter-spaced label.
- **`<Cta>`** — the bracketed `[ LABEL ]` treatment.
- **`<Tag>`** — a small squared tag (inherits its colour).
- **`<Callout>`** — an augmented (cut-corner) alert.
- **`<Pipeline :stages="[…]" />`** — an animated stage flow with drawn arrows.
- **`<Steps :items="[{ title, body }]" />`** — a numbered timeline revealed step by step.
- **`<Bars :items="[{ label, value, display }]" />`** — animated benchmark bars.
- **`<Stat value label />`** — a big Roboto Flex numeral with a mono caption.

```md
<AugFrame>

#### A framed panel

<Cta>Read more</Cta>

</AugFrame>

<AugFrame inverted size="lg">…</AugFrame>

<Kicker>section 01</Kicker> <Tag>new</Tag>
```

## Chrome

Two global layers ship with the theme:

- **progress bar** — pinned to the very top of the slide (`.lfds-progress`)
- **slide pager** — `03 / 11`, bottom-right, hidden on the `cover`, `intro` and `end` layouts (`.lfds-pager`)

Both anchor to the viewport when presenting and to each slide page when exporting.

## Utilities

`.link` (dashed underline) · `.cta` · `.kicker` · `.label` · `.tag` ·
`.panel` · `.aug-frame` · `.callout` · `.invert` · `.numeral` · `.stat` ·
`.pipeline` · `.steps-v` · `.bars` · `.cols` / `.cols-3` · `.muted` ·
`.mono` · `.display` · `.footnote` · `.cursor` (blinking) · `.pulse` ·
`.swatches` / `.swatch`

## Design tokens

All tokens live in `styles/tokens.css` and switch with `html.dark`:

`--background` · `--foreground` · `--background-secondary` ·
`--foreground-secondary` · `--primary` · `--secondary` · `--accent` ·
`--destructive` · `--muted` · `--card` · `--border` · `--ring` · `--link-primary` ·
`--link-primary-hover` · `--edge` (foreground hairlines) · `--edge-soft` ·
`--aug-size` · `--blue` / `--cyan` / `--green` / `--magenta` / `--red` /
`--yellow` / `--orange` · `--gray-1..3`

They are also exposed as UnoCSS utilities, so you can style slides with the
site's own vocabulary:

```html
<div class="border-t border-foreground hover:text-link-primary-hover font-display uppercase">
  …
</div>
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
