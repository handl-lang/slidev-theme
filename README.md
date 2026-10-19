# slidev-theme-handl

A [Slidev](https://sli.dev) theme in the [handl docs](https://handl-lang.github.io/docs/) look:
Source Sans 3 / Source Code Pro, an oklch green ramp on black & white,
square corners and a `>>>` prompt motif.

Forked from [slidev-theme-lfds](https://github.com/luisfuturist/slidev-theme-lfds).

## Install

```bash
npm i -D github:handl-lang/slidev-theme
```

```yaml
---
theme: handl
---
```

## Layouts

| Layout | Purpose |
|---|---|
| `cover` / `intro` | Title slide with a `>>>` prompt |
| `section` | Centered divider |
| `statement` | Full-bleed statement at display scale |
| `fact` | Oversized green numeral + mono caption |
| `quote` | Pull quote led by `>>>` |
| `end` | Inverted closing slide |

Built-in layouts (`default`, `center`, `two-cols`, …) are styled as well.

## Components

`<Frame>` (`inverted`, `size="lg"`) · `<Kicker>` · `<Cta>` · `<Tag>` ·
`<Callout>` · `<Pipeline :stages>` · `<Steps :items>` · `<Bars :items>` ·
`<Stat value label>`

```md
<Frame>

#### A framed panel

<Cta>Read more</Cta>

</Frame>
```

## Chrome

A top progress bar and a bottom-right `03 / 11` pager ship with the theme.
Slides marked `backup: true` are excluded from the count.

## Theming

Design tokens live in `styles/tokens.css` (`--primary`, `--foreground`,
`--border`, `--chart-1..5`, …), switch with `html.dark` and are exposed as
UnoCSS utilities via `uno.config.ts`. Utility classes live in
`styles/components.css`; code highlighting in `setup/shiki.ts`.

## Development

```bash
bun install
bun run dev         # preview example.md
bun run screenshot  # export PNGs
bun run export      # export PDF
```

## License

[MIT](LICENSE)
