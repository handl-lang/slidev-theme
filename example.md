---
theme: ./
layout: cover
title: handl
info: |
  handl — a Slidev theme in the handl docs look: Source Sans 3 /
  Source Code Pro, an oklch green ramp, square corners and `>>>`.
highlighter: shiki
lineNumbers: false
transition: slide-left
colorSchema: dark
mdc: true
---

<Kicker>slidev-theme-handl</Kicker>

# A handl theme for Slidev

Green ramp, square corners, `>>>` prompts.

<div class="footnote">github.com/handl-lang/slidev-theme</div>

---
layout: default
---

# Typography

## Headings are Source Sans 3, bold

### Body copy is Source Sans 3

Paragraphs, **strong text**, *emphasis*, and `inline code` all inherit the
handl palette. Links look like <a href="#" class="link">this</a>.

- Lists use a square marker in the handl green
- Second item
- Third item

> Blockquotes get a square panel with a primary left rule.

---
layout: default
---

# Components

<div class="cols">
<div>

<Frame>

#### `<Frame>`

A square panel on the secondary surface with a hairline border.

</Frame>

<Frame inverted style="margin-top:1rem">

#### Inverted frame

<Cta>Read more</Cta>

</Frame>

</div>
<div>

<Kicker>kicker label</Kicker>

<p style="margin-top:1rem">
<Tag>tag</Tag> <Tag>another</Tag>
</p>

<p style="margin-top:1.2rem">
Labels are mono + uppercase; <code>&lt;Cta&gt;</code> renders the
<code>&gt;&gt;&gt;</code> prompt treatment. Emphasis comes from
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

<Frame size="lg" style="height:100%">

#### `size="lg"`

Roomier padding, same square shape — the docs' card treatment.

</Frame>

</div>
<div>

<Frame inverted size="lg" style="height:100%">

### Inverted

Foreground fill, background text.

<Cta>Install handl</Cta>

</Frame>

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

A square alert — hairline border, primary left rule.

</Callout>

<p style="margin-top:1rem">
Markdown <code>&gt;</code> blockquotes share the same treatment.
</p>

</div>
</div>

---
layout: two-cols
---

# Two columns

The built-in `two-cols` layout still works, styled by handl.

::right::

<Frame>

#### Right column

Content lands on the right via the `::right::` slot.

</Frame>

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
  <span class="swatch"><i style="--sw: var(--chart-1)"></i>chart-1</span>
  <span class="swatch"><i style="--sw: var(--chart-2)"></i>chart-2</span>
  <span class="swatch"><i style="--sw: var(--chart-3)"></i>chart-3</span>
  <span class="swatch"><i style="--sw: var(--chart-4)"></i>chart-4</span>
  <span class="swatch"><i style="--sw: var(--chart-5)"></i>chart-5</span>
  <span class="swatch"><i style="--sw: var(--foreground)"></i>foreground</span>
  <span class="swatch"><i style="--sw: var(--background-secondary)"></i>surface</span>
</div>

<p style="margin-top:1.4rem">
<Tag>tag</Tag> <Tag>another</Tag>
</p>

<div style="margin-top:1.4rem" class="mono">
Hairlines are <code>border-edge</code>. Green is the accent.
</div>

---
layout: section
---

# Section

A divider slide, centered.

---
layout: end
---

# handl

<Kicker>thank you</Kicker>
