# slidev-theme-handl

A [Slidev](https://sli.dev) theme in the handl docs look: Source Sans 3
/ Source Code Pro, an oklch green ramp on black & white, square corners
and a `>>>` prompt motif. Forked from
[slidev-theme-lfds](https://github.com/luisfuturist/slidev-theme-lfds).

## Layout

| path | role |
| --- | --- |
| `layouts/` | the custom layouts (`cover`/`intro`, `section`, `statement`, `fact`, `quote`, `end`) |
| `components/`, `styles/`, `setup/` | Vue components, theme styles, Slidev setup |
| `global-top.vue`, `global-bottom.vue` | global slide chrome |
| `example.md` | the theme's example deck |
| `package.json` / `bun.lock` | npm package (`slidev-theme-handl`) |
| `docs/`, `dist/` | theme docs + built output |

## Contract

- Consumed as `theme: handl` in a Slidev deck's frontmatter.

## Verification

```bash
bun install
npm run dev         # slidev example.md --open
npm run build       # slidev build example.md
npm run screenshot  # export example.md as png
```

<!-- myco:agent-awareness -->

## Agent awareness

- Session start / any work discussion: run `myco status --prompt`
  before proposing next steps — know the board first.
- User describes new work → offer to capture it (`myco todo add`,
  `issue new`, `proposal new`). Don't wait to be asked.
- Picking up a task: `myco resume <ID>` is the briefing.
- Wrapping up: `myco handoff <ID>` anything resumable; keep statuses
  honest (claimed → in-progress → blocked/done).

<!-- /myco:agent-awareness -->
