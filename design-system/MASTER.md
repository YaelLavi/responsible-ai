# Responsible AI — Design System Master
**Version:** 1.0 | **Finalized:** March 2026
**Style:** Forest & Moss — Warm Editorial Minimalism
**Fonts:** Fraunces (headings) + Nunito Sans (body)

---

## Design Philosophy

**"Warm editorial clarity."**
This is a public awareness campaign, not a tech product. The visual language feels like a thoughtful environmental magazine: credible, human, calm, and clear.
- No dark mode dystopia
- No neon or "AI circuit board" clichés
- No cold corporate blue
- Empowering and honest — never preachy or scary

---

## 1. Color Tokens

### Core Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-primary` | Deep Forest | `#2B4A35` | Hero backgrounds, headings, icon strokes, stat labels |
| `--color-secondary` | Warm Moss | `#7A9E6E` | CTA buttons, callout borders, highlights |
| `--color-bg` | Warm White | `#F9F6F1` | Page background |
| `--color-surface` | Soft Cream | `#EDE8DF` | Cards, section backgrounds, typography sample bg |
| `--color-text` | Deep Slate | `#1E2A23` | All body text, headings on light bg |
| `--color-text-muted` | Warm Gray | `#6B7B6E` | Captions, metadata, secondary labels |
| `--color-accent` | Terracotta | `#C4623A` | Warning stats, high-impact numbers, attention callouts |
| `--color-success` | Muted Teal | `#3D7A73` | Positive habits, tips, success states |

### Functional Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-border` | `rgba(30,42,35,0.08)` | Card borders, dividers, column separators |
| `--color-overlay` | `rgba(43,74,53,0.09)` | Icon backgrounds, tinted surfaces |
| `--color-callout-bg` | `rgba(122,158,110,0.08)` | Callout box fill (secondary-tinted) |
| `--color-accent-bg` | `rgba(196,98,58,0.08)` | Terracotta-tinted callouts (warning tone) |

### Color Usage Rules
- Use `--color-primary` for all headings on light background and hero section background
- Use `--color-secondary` for CTAs and interactive highlights — never use primary green for buttons (too dark)
- Reserve `--color-accent` (terracotta) for statistics that need to feel impactful or alarming (energy/water numbers)
- Use `--color-success` (teal) for habit tips and positive reinforcement content
- Never use raw hex in components — always reference tokens

---

## 2. Typography

### Font Stack

```css
--font-heading: 'Fraunces', Georgia, serif;
--font-body:    'Nunito Sans', system-ui, sans-serif;
```

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
```

### Type Scale

| Token | Role | Size | Weight | Font | Line-height |
|---|---|---|---|---|---|
| `--text-display` | Big stats / hero numbers | 56–72px | 700 | Fraunces | 1.0 |
| `--text-h1` | Page titles | 40–48px | 400 (optical) | Fraunces | 1.18 |
| `--text-h2` | Section headings | 28–32px | 600 | Fraunces | 1.25 |
| `--text-h3` | Subsection headings | 20–24px | 600 | Nunito Sans | 1.3 |
| `--text-lead` | Lead paragraphs | 18–20px | 400 | Nunito Sans | 1.7 |
| `--text-body` | Body text | 16px | 400 | Nunito Sans | 1.6 |
| `--text-label` | Labels / eyebrows | 11–13px | 600 | Nunito Sans | 1.4 |
| `--text-caption` | Captions / metadata | 13px | 400 | Nunito Sans | 1.5 |

### Typography Rules
- Max line length: **65–72 characters** for body text
- Minimum body size: **16px** (prevents iOS auto-zoom)
- Use **tabular figures** (`font-variant-numeric: tabular-nums`) for all statistics
- Labels and eyebrows: `letter-spacing: 0.12–0.16em`, `text-transform: uppercase`
- Fraunces is an optical-size variable font — use `font-optical-sizing: auto` in CSS

---

## 3. Spacing System

Based on a **4pt/8pt grid**. All spacing values are multiples of 4.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Micro gaps (icon to text) |
| `--space-2` | 8px | Tight element spacing |
| `--space-3` | 12px | Inner card padding (compact) |
| `--space-4` | 16px | Default inner padding |
| `--space-5` | 24px | Card padding, between-item gaps |
| `--space-6` | 32px | Section sub-spacing |
| `--space-7` | 48px | Column padding, large component padding |
| `--space-8` | 64px | Section spacing (mobile) |
| `--space-9` | 96px | Section spacing (desktop) |
| `--space-10` | 128px | Hero / page-level spacing |

---

## 4. Component Specifications

### Cards
```
border-radius:  12px
background:     var(--color-surface)   /* #EDE8DF */
box-shadow:     0 2px 12px rgba(0,0,0,0.07)
padding:        24px 28px
border:         none (shadow only)
```

### Buttons — Primary
```
background:     var(--color-secondary)  /* #7A9E6E */
color:          #ffffff
border-radius:  8px
padding:        13px 28px
font:           600 15px Nunito Sans
border:         2px solid var(--color-secondary)
hover:          opacity 0.85
```

### Buttons — Secondary / Outlined
```
background:     transparent
color:          var(--color-primary)
border-radius:  8px
padding:        13px 28px
font:           600 15px Nunito Sans
border:         2px solid var(--color-primary)
hover:          background rgba(43,74,53,0.06)
```

### Callout / Quote Box
```
border-left:    4px solid var(--color-secondary)
background:     var(--color-callout-bg)
border-radius:  0 10px 10px 0
padding:        18px 22px
font-style:     italic (for quote text)
cite color:     var(--color-secondary), uppercase, 12px, 600 weight
```

### Stat Callout Card
```
Uses card spec above, plus:
Icon container:   28×28px or 44×44px, border-radius 10px, background var(--color-overlay)
Icon stroke:      var(--color-primary), stroke-width 2, no fill
Stat label:       11px, 600 weight, uppercase, color var(--color-primary), letter-spacing 0.1em
Stat value:       15px, 600 weight, color var(--color-text)
Stat sub:         13px, color var(--color-text-muted)
```

### Eyebrow / Section Label
```
font:            600 11px Nunito Sans
letter-spacing:  0.14em
text-transform:  uppercase
color:           var(--color-text-muted)
margin-bottom:   20–24px
```

### Dividers
- Prefer **whitespace** (80–120px between sections) over horizontal rules
- When a line is needed: `1px solid var(--color-border)`

---

## 5. Layout & Breakpoints

```
Mobile:   375px+   single column, 20px gutters
Tablet:   768px+   2-column where appropriate, 32px gutters
Desktop:  1024px+  full layout, max-width 1100px centered
Wide:     1440px+  max-width 1200px, generous whitespace
```

**Container:**
```css
max-width: 1100px;
margin: 0 auto;
padding: 0 24px;
```

---

## 6. Iconography

- **Library:** Lucide or Phosphor (line-style SVG)
- **Style:** Outline only, `stroke-width: 2`, `stroke-linecap: round`, `stroke-linejoin: round`, `fill: none`
- **Sizes:** 16px (inline), 22px (stat cards), 32px (feature icons)
- **Color:** Always `var(--color-primary)` or `var(--color-secondary)` — never raw color
- **Rule:** No emoji as icons. No raster icons.

---

## 7. Infographic Style

- **Layout:** Grid-based, generous whitespace. Never cramped.
- **Background:** Always `var(--color-bg)` or `var(--color-surface)` — never pure white
- **Big numbers:** Fraunces, 48–72px, `font-variant-numeric: tabular-nums`
  - Environmental stats (alarming): use `var(--color-accent)` — terracotta
  - General stats: use `var(--color-primary)` — forest green
- **Analogy illustrations:** Simple flat 2D icons/illustrations in campaign palette. No 3D, no photographic.
- **Charts:** Horizontal bar charts preferred for comparisons. Subtle gridlines (`rgba(30,42,35,0.06)`), no heavy borders.
- **Color in charts:** One accent color per chart. Don't rainbow every bar.
- **Disclaimer text:** Always include source note in `--text-caption` style below any statistic.

---

## 8. Voice & Tone (Design Reminders)

- **Simple** — If a 16-year-old can't read it, the font is too small or the contrast too low.
- **Direct** — Stat first, context second. Don't bury the number.
- **Not preachy** — Frame everything as empowerment: "here's what you can do," not "here's what you're doing wrong."
- **Honest** — Include source disclaimers on all statistics. "Numbers are approximate and model-dependent."

---

## 9. Do / Don't

| Do | Don't |
|---|---|
| Use Fraunces for all display and heading text | Mix heading fonts |
| Use soft terracotta for alarming stats | Use red — too aggressive |
| Keep cards cream on warm-white background | Use pure `#ffffff` white anywhere |
| Use outline SVG icons | Use emoji as icons |
| Include source attribution on every stat | Publish stats without disclaimer |
| Use `letter-spacing` on all uppercase labels | Set body text in uppercase |
| Generous line-height (1.6+) on body text | Tight line-height on paragraphs |

---

*Design system locked March 2026. Based on Option A (Forest & Moss) from design-preview.html.*
*Primary campaign document: summary.md*
