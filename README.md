# slidev-theme-handl

A [Slidev](https://github.com/slidevjs/slidev) theme in the look of the
[handl docs site](https://handl-lang.github.io/docs/): Source Sans 3
type, Source Code Pro for code and labels, an oklch green ramp on a
black/white base, square corners, hairline borders and the `>>>`
prompt motif.

Forked from [`slidev-theme-lfds`](https://github.com/luisfuturist/slidev-theme-lfds).

- **Type** — Source Sans 3 (display + body, bold headings), Source Code Pro (labels/code)
- **Palette** — the handl green ramp (`--chart-1..5`, hue 155) with full light + dark themes
- **Corners** — square, always: `--radius: 0`
- **Surfaces** — `--border` hairlines, underlined primary links, inverted foreground blocks
- **Motif** — `>>>` prompt prefixes in `--primary` on titles, CTAs and the `.prompt` utility

## Colour roles

The theme follows the docs' discipline:

| Token | Role |
|---|---|
| `--foreground` | text and emphasis fills (inversion) |
| `--primary` | the handl green — links, markers, `>>>`, bars, progress |
| `--background-secondary` | surfaces (frames, code, table heads) |
| `--muted` | table stripes and quiet surfaces |
| `--muted-foreground` | de-emphasised text |
| `--border` / `--edge` | structural hairlines |
| `--ring` | the bright end of the green ramp |

Emphasis is expressed by *inverting* (a `--foreground` fill), not by
tinting — exactly as the docs' selection does.

## Install

```bash
npm i -D slidev-theme-handl
```

```yaml
---
theme: handl
---
```

## Layouts

| Layout | Purpose |
|---|---|
| `cover` | Title slide with a `>>>` prompt over the display-scale title |
| `intro` | Same family as `cover` |
| `section` | Centered divider with the `>>>` mark |
| `statement` | Full-bleed statement at display scale |
| `fact` | Oversized green numeral + mono caption |
| `quote` | Pull quote led by `>>>` |
| `end` | **Inverted** closing slide (foreground fill, background text) |

Built-in layouts (`default`, `center`, `two-cols`, …) remain available
and are styled by the theme. `default` h1s get an inline `>>>` prefix.

## Components

- **`<Frame>`** — a square bordered panel. Props: `inverted` (foreground
  fill, background text), `size` (`lg` for roomier padding).
- **`<Kicker>`** — a mono, uppercase, letter-spaced label.
- **`<Cta>`** — a mono label led by `>>>` in `--primary`.
- **`<Tag>`** — a small squared tag in `--primary`.
- **`<Callout>`** — a square alert with a primary left rule.
- **`<Pipeline :stages="[…]" />`** — an animated stage flow with drawn arrows.
- **`<Steps :items="[{ title, body }]" />`** — a numbered timeline revealed step by step.
- **`<Bars :items="[{ label, value, display }]" />`** — animated bars filled with `--primary`.
- **`<Stat value label />`** — a big numeral with a mono caption.

```md
<Frame>

#### A framed panel

<Cta>Read more</Cta>

</Frame>

<Frame inverted size="lg">…</Frame>

<Kicker>section 01</Kicker> <Tag>new</Tag>
```

## Chrome

Two global layers ship with the theme:

- **progress bar** — pinned to the very top of the slide, filled with
  `--primary` (`.h-progress`)
- **slide pager** — `03 / 11`, bottom-right, hidden on `end` and backup
  slides (`.h-pager`)

Both anchor to the viewport when presenting and to each slide page when exporting.

Slides marked `backup: true` are treated as appendix material — they are
excluded from the pager's total and the pager is hidden on them:

```yaml
---
layout: default
backup: true
---
```

## Utilities

`.link` · `.cta` · `.kicker` · `.label` · `.tag` · `.panel` · `.frame` ·
`.callout` · `.invert` · `.prompt` (`>>>` prefix) · `.numeral` · `.stat` ·
`.pipeline` · `.steps-v` · `.bars` · `.cols` / `.cols-3` · `.muted` ·
`.mono` · `.display` · `.footnote` · `.cursor` (blinking block, primary) ·
`.pulse` · `.swatches` / `.swatch`

## Design tokens

All tokens live in `styles/tokens.css` and switch with `html.dark`:

`--background` · `--foreground` · `--background-secondary` ·
`--foreground-secondary` · `--primary` · `--secondary` · `--accent` ·
`--destructive` · `--muted` · `--muted-foreground` · `--card` ·
`--border` · `--ring` · `--link-primary` · `--link-primary-hover` ·
`--edge` / `--edge-soft` (hairlines) · `--chart-1..5` (the green ramp) ·
`--gray-1..3`

They are also exposed as UnoCSS utilities, so you can style slides with
the docs' own vocabulary:

```html
<div class="border-t border-edge hover:text-link-primary-hover font-display uppercase">
  …
</div>
```

## Code highlighting

`setup/shiki.ts` ports the docs site's `handlDark` theme (green keywords,
white literals) for dark slides and `github-light` for light slides.

## Development

```bash
bun install
bun run dev        # preview example.md
bun run screenshot # render example.md to PNGs
bun run export     # render example.md to PDF
```

## License

MIT
