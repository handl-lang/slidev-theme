# How-to guides

Task recipes. Each assumes sibling checkouts of this repo and of the platform
repos it patches.

## Use the theme

Install from GitHub and set `theme: handl` in the deck frontmatter.

```
npm i -D github:handl-lang/slidev-theme
```

## Match the docs exactly

Reuse the same font pairing and palette as the site: the theme is the single place those tokens live, so a deck cannot drift from the docs look.
