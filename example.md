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

<AugFrame inverted style="margin-top:1rem">

#### Inverted frame

<Cta>Read more</Cta>

</AugFrame>

</div>
<div>

<Kicker>kicker label</Kicker>

<p style="margin-top:1rem">
<Tag>tag</Tag> <Tag>another</Tag>
</p>

<p style="margin-top:1.2rem">
Labels are mono + uppercase; <code>&lt;Cta&gt;</code> renders the
<code>[&nbsp;bracketed&nbsp;]</code> treatment. Emphasis comes from
inverting, not from tinting.
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
layout: default
---

# Data & flow

<div class="cols-3" style="gap:2.4rem; margin-bottom:1.5rem">
<Stat value="2·log₂T" label="scan depth" />
<Stat value="260×" label="streaming attention" />
<Stat value="O(1)" label="state per KV block" />
</div>

<Pipeline :stages="['model', 'typed IR', 'e-graph', 'extract', 'verify', 'lower']" />

<div style="margin-top:1.6rem">
<Bars :items="[{ label: 'projection pairing', value: 1.24, display: '1.24×' }, { label: 'attention fold', value: 4.6, display: '4.6×' }, { label: 'reassociation', value: 8, display: '8.0×' }, { label: 'weights-first fold', value: 15.9, display: '15.9×' }, { label: 'streaming attention', value: 260, display: '260×' }]" />
</div>

---
layout: default
---

# Steps & callout

<div class="cols">
<div>

<Steps :items="[{ title: 'Input', body: 'a real block' }, { title: 'Search', body: 'equivalent programs' }, { title: 'Measure', body: 'against the baseline' }, { title: 'Inspect', body: 'why it wins' }]" />

</div>
<div>

<Callout>

An augmented alert — cut corners, never rounded.

</Callout>

<p style="margin-top:1rem">
Markdown <code>&gt;</code> blockquotes share the same cut-corner shape.
</p>

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

<p style="margin-top:1.4rem">
<Tag>tag</Tag> <Tag>another</Tag>
</p>

<div style="margin-top:1.4rem" class="mono">
Hairlines are <code>border-foreground</code>. Orange is interaction only.
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
