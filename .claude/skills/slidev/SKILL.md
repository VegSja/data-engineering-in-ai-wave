---
name: slidev
description: Comprehensive guide for Slidev - a web-based presentation framework for developers. Covers Markdown syntax, layouts, components, animations, theming, and exporting. Use this skill when creating or working with developer presentations using Slidev.
---

# Slidev

## Overview

Slidev is a presentation platform for developers: slides are Markdown, styling is UnoCSS/Tailwind, and interactivity is Vue. This skill covers both the general API and practical lessons learned from building real presentations with it.

---

## Quick Start

```bash
pnpm create slidev
slidev          # dev server at localhost:3030
slidev build    # production build
slidev export   # export to PDF
```

---

## Slide Structure

### Separators

```md
# Slide 1

Content

---

# Slide 2

Content
```

### Headmatter (global config)

The first `---` block configures the entire deck. Merge the cover slide's `layout` and `class` here to avoid creating an empty first slide:

```md
---
theme: default
colorSchema: dark
title: My Presentation
transition: fade
mdc: true
fonts:
  sans: Inter
  mono: JetBrains Mono
layout: cover
class: text-center
---

# Cover slide content goes here

---
layout: center
---

# Slide 2
```

### Per-slide frontmatter

```md
---
layout: center
class: text-center
---
```

### Presenter notes

Use a single `<!-- -->` block at the **end** of each slide, after all HTML content:

```md
# My Slide

Content here

<!--
Notes visible only to the presenter.
-->
```

**Important:** Do not put `<!-- -->` comments inside HTML elements within a slide. The Markdown parser can misinterpret them as presenter note blocks, which breaks the compilation of subsequent slides. Only use HTML comments at the slide's top level.

---

## Dark Mode with the Default Theme

To get a dark presentation using the built-in `default` theme, set `colorSchema: dark` in the headmatter. Do not try to override the background colour with raw CSS on `.slidev-layout` — this fights the theme.

```md
---
theme: default
colorSchema: dark
---
```

---

## Layouts

### Built-in Layouts

| Layout | Use for |
|--------|---------|
| `cover` | Title slide |
| `center` | Content centred on screen |
| `statement` | Single bold statement, centred |
| `end` | Closing / thank-you slide |
| `two-cols` | Two columns |
| `two-cols-header` | Header + two columns |
| `image-left` / `image-right` | Image beside content |
| `iframe` | Full-screen embedded page |
| `none` | No layout wrapper |

### Two-column with header

Requires `mdc: true` in headmatter for the `::left::` / `::right::` slot syntax:

```md
---
layout: two-cols-header
---

## Heading spans both columns

::left::

Left content

::right::

Right content
```

---

## Styling

### Use `styles/index.css` for reusable classes

Define custom component classes here using `@apply` with UnoCSS tokens. Define variant overrides **after** the base class so the cascade works correctly without needing `!important`:

```css
/* styles/index.css */
.card {
  @apply bg-slate-800 border border-slate-700 rounded-xl p-5;
}
.card-indigo { @apply bg-indigo-950 border-indigo-800; }
.card-red    { @apply bg-red-950 border-red-800; }

.label {
  @apply inline-block px-4 py-1 rounded-full text-lg font-bold tracking-widest uppercase;
}
```

### UnoCSS utilities inline

Use Tailwind-compatible class names directly on elements:

```md
<div class="flex gap-4 items-center text-slate-300">
  <span class="text-indigo-400 font-bold">Highlighted</span>
</div>
```

### Do not use raw CSS values

Avoid raw colour hex codes or pixel values in custom CSS. Use UnoCSS design tokens (`text-slate-400`, `bg-indigo-950`, `rounded-xl`, etc.) so the output is consistent with the theme.

### No inline `<style>` blocks for global styles

A `<style>` block inside the first slide is treated as global CSS and does work — but it bypasses UnoCSS and can conflict with the theme. Prefer `styles/index.css` for anything reusable and inline UnoCSS classes for one-offs.

### Avoid absolute positioning hacks

Do not position headings or UI elements with `position: absolute`. Let content flow normally inside the layout. If you need a pinned heading, use the layout's own header slot (e.g. `two-cols-header`) or a global layer.

---

## Animations

### v-click — reveal on click

```md
<div v-click>Appears on first click</div>
<div v-click>Appears on second click</div>
```

### Numbered steps

```md
<div v-click="1">Step 1</div>
<div v-click="2">Step 2</div>
<div v-click="1">Also at step 1</div>
```

### v-clicks on lists

```md
<v-clicks>

- First
- Second
- Third

</v-clicks>
```

### Slide transitions

Set globally in headmatter or per-slide:

```md
---
transition: fade
---
```

Options: `fade`, `slide-left`, `slide-right`, `slide-up`, `slide-down`, `view-transition`

---

## Icons

Iconify icons are available directly. No import needed:

```md
<carbon-logo-github class="text-2xl" />
<carbon-logo-linkedin class="text-2xl" />
<mdi-heart class="text-red-500" />
```

Use them inline in HTML or alongside text:

```md
<a href="https://github.com/yourhandle" class="flex items-center gap-2">
  <carbon-logo-github />
  <span>yourhandle</span>
</a>
```

---

## Built-in Components

```md
<Youtube id="dQw4w9WgXcQ" />
<Arrow x1="100" y1="100" x2="200" y2="200" />
<AutoFitText :max="300" :min="20">Auto-sized text</AutoFitText>
<Toc minDepth="1" maxDepth="2" />
```

---

## Code Blocks

````md
```ts
const x = 1
```

```ts {lines:true}
// with line numbers
```

```ts {2,4-6}
// with line highlighting
```

```ts {monaco}
// editable in presenter mode
```
````

---

## Exporting

```bash
pnpm add -D playwright-chromium   # required for CLI export
slidev export                     # PDF
slidev export --format png
slidev export --format pptx
slidev export --with-clicks       # one frame per click step
slidev export --dark
```

---

## Gotchas

**Empty first slide** — If you separate headmatter from the first content `---` with a blank line, Slidev creates an empty slide 1. Fix by merging the first slide's `layout` and `class` into the headmatter block directly.

**HTML comments inside HTML blocks** — `<!-- ... -->` that appear on their own lines inside slide HTML content can be picked up by the Markdown parser as presenter note blocks. This silently breaks compilation of the slide and any slides that follow. Only use `<!-- -->` at the top level of a slide, after all HTML.

**Card variant overrides** — When combining a base class (`.card`) and a variant (`.card-red`), the variant must be defined later in `styles/index.css` than the base class. Both have single-class specificity, so insertion order determines which wins.

**Too much content on one slide** — If a slide's content overflows the frame, split it into two slides rather than trying to shrink font sizes or reduce padding. Slidev slides have fixed aspect ratios.

**Unused scaffolding** — `pnpm create slidev` generates `components/Counter.vue`, `pages/imported-slides.md`, and `snippets/external.ts`. Delete them if unused; they add noise and the component will show up in Vue's auto-import registry.

**`mdc: true` is required for slot syntax** — The `::left::` / `::right::` slot syntax in `two-cols-header` and similar layouts only works when `mdc: true` is set in the headmatter.

---

## Directory Structure

```
./
├─ slides.md          # all content and headmatter
├─ styles/
│   └─ index.css      # reusable @apply classes
├─ components/        # custom Vue components (auto-imported)
├─ layouts/           # custom layout overrides
├─ public/            # static assets
└─ package.json
```

---

## Recommended Headmatter

```md
---
theme: default
colorSchema: dark
title: My Talk
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: fade
mdc: true
fonts:
  sans: Inter
  mono: JetBrains Mono
layout: cover
class: text-center
---
```
