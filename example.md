---
theme: ./
layout: cover
title: LFDS
info: |
  LFDS — a retro-terminal Slidev theme: Roboto type, a phosphor
  palette, augmented corners and dashed links.
highlighter: shiki
lineNumbers: false
transition: slide-left
colorSchema: dark
mdc: true
---

<Kicker>slidev-theme-lfds</Kicker>

# A retro-terminal theme for Slidev

Phosphor colors, augmented corners, Roboto type.

<div class="footnote">github.com/luisfuturist/slidev-theme-lfds</div>

---
layout: default
---

# Typography

## Headings use Roboto Condensed

### Body copy is Roboto, set light

Paragraphs, **strong text**, *emphasis*, and `inline code` all inherit the
LFDS palette. Links look like <a href="#" class="link">this dashed link</a>.

- Lists use the square brand marker
- Second item
- Third item

> Blockquotes get an accent rule and a secondary surface.

---
layout: default
---

# Components

<div class="cols">
<div>

<AugFrame>

#### `<AugFrame>`

Cuts the top-right and bottom-left corners at 12px, filled with the
secondary surface.

</AugFrame>

<AugFrame accent style="margin-top:1rem">

#### Accent frame

<Cta>Read more</Cta>

</AugFrame>

</div>
<div>

<Kicker>kicker label</Kicker>

<p style="margin-top:1rem">
<Tag>default</Tag> <Tag variant="accent">accent</Tag> <Tag variant="secondary">secondary</Tag>
</p>

<p style="margin-top:1.2rem">
Labels are mono + uppercase; <code>&lt;Cta&gt;</code> renders the
<code>[&nbsp;bracketed&nbsp;]</code> treatment.
</p>

</div>
</div>

---
layout: default
---

# Large frames & inverted

<div class="cols">
<div>

<AugFrame size="lg" style="height:100%">

#### `size="lg"`

Every corner cut at `--aug-size` (responsive 32 / 40 / 48px) — the
treatment the site gives to full sections.

</AugFrame>

</div>
<div>

<AugFrame inverted size="lg" style="height:100%">

### Inverted

Foreground fill, background text.

<Cta>Contact me</Cta>

</AugFrame>

</div>
</div>

---
layout: two-cols
---

# Two columns

The built-in `two-cols` layout still works, styled by LFDS.

::right::

<AugFrame secondary>

#### Right column

Content lands on the right via the `::right::` slot.

</AugFrame>

---
layout: fact
---

# 12×
faster than hand-tuning

---
layout: quote
---

# Simplicity is the ultimate sophistication.

— Leonardo da Vinci

---
layout: statement
---

# A statement slide sets the type at display scale.

---
layout: default
---

# Code

```python
from dataclasses import dataclass

@dataclass
class Monoid:
    empty: object
    combine: object

    def fold(self, xs):
        acc = self.empty
        for x in xs:
            acc = self.combine(acc, x)
        return acc
```

---
layout: default
---

# Palette & rules

<div class="label">design tokens</div>

<div class="swatches" style="margin-top:1rem">
  <span class="swatch"><i style="--sw: var(--blue)"></i>blue</span>
  <span class="swatch"><i style="--sw: var(--cyan)"></i>cyan</span>
  <span class="swatch"><i style="--sw: var(--green)"></i>green</span>
  <span class="swatch"><i style="--sw: var(--magenta)"></i>magenta</span>
  <span class="swatch"><i style="--sw: var(--red)"></i>red</span>
  <span class="swatch"><i style="--sw: var(--yellow)"></i>yellow</span>
  <span class="swatch"><i style="--sw: var(--orange)"></i>orange</span>
</div>

<div style="margin-top:1.6rem" class="mono">
Hairlines are <code>border-foreground</code>, exactly as on the site.
</div>

---
layout: section
---

# Section

A divider slide, centered.

---
layout: end
---

# LFDS

<Kicker>thank you</Kicker>
