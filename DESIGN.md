---
name: JD Brüder
description: Car detailing in the Westerwald, presented as a care-product label series on a matte-black bottle ground.
colors:
  ink: "#0d0d0d"
  ink-raised: "#161616"
  ink-rule: "#222222"
  paper: "#ffffff"
  jd-gold: "#b49759"
  gold-bright: "#cdb27a"
  text-on-ink: "#ecebe8"
  muted-on-ink: "#a7a399"
  label-text: "#111111"
  label-muted: "#55524b"
typography:
  display:
    fontFamily: "Caslon Display, Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.4rem, 6vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Caslon Display, Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.3rem, 5.4vw, 3.9rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Caslon Display, Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(1.6rem, 3vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  price:
    fontFamily: "Caslon Display, Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)"
    fontWeight: 400
    lineHeight: 1.1
    fontFeature: "tnum, lnum"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.18em"
    fontVariation: "'wdth' 125"
  button:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 112"
rounded:
  hairline: "2px"
  none: "0px"
  round: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  container: "1240px"
  section: "clamp(4.5rem, 10vw, 8rem)"
  label-pad: "clamp(1.6rem, 4vw, 2.6rem)"
  row: "1.4rem"
components:
  button-primary:
    backgroundColor: "{colors.jd-gold}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.hairline}"
    padding: "0.8rem 1.4rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-bright}"
    textColor: "{colors.ink}"
  button-outline-on-label:
    backgroundColor: "transparent"
    textColor: "{colors.label-text}"
    typography: "{typography.button}"
    rounded: "{rounded.hairline}"
    padding: "0.8rem 1.4rem"
    height: "3.25rem"
  button-outline-on-label-hover:
    backgroundColor: "{colors.label-text}"
    textColor: "{colors.paper}"
  button-outline-on-ink:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.hairline}"
    padding: "0.8rem 1.4rem"
    height: "3.25rem"
  button-outline-on-ink-hover:
    backgroundColor: "{colors.text-on-ink}"
    textColor: "{colors.ink}"
  label-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.label-text}"
    rounded: "{rounded.none}"
    padding: "{spacing.label-pad}"
  package-row:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text-on-ink}"
    padding: "1.4rem clamp(1rem, 3vw, 2rem)"
  package-row-hover:
    backgroundColor: "{colors.ink-raised}"
  nav-link:
    textColor: "{colors.muted-on-ink}"
    typography: "{typography.label}"
  compare-knob:
    backgroundColor: "{colors.jd-gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "3rem"
---

# Design System: JD Brüder

## Overview

**Creative North Star: "The Care-Product Label Series"**

The site is a shelf of detailing products. The ground is the matte-black bottle (near-black, never pure black); every offer that needs to be read closely is a white label stuck onto that bottle, framed by a double gold hairline the way a premium care label carries a foil stamp. Package names and prices are set in a high-contrast Caslon display serif that echoes the logo's "BRÜDER"; the small print of the label (place, founding year, duration, contents) is set in Archivo stretched wide and tracked open, like the "EST.2022" line on the logo itself.

Density is calm and editorial: generous section spacing, one idea per band, full-bleed own photography of the workshop under its hexagon lights. Gold behaves like stamping foil, not paint. It draws lines, prices, the primary action and the slider handle, and never floods a surface. Depth exists only where a physical label would cast it; everything else is flat black separated by 1px dark hairlines.

**Key Characteristics:**
- Matte-black ground with white label cards as the only light surfaces.
- Double gold hairline inset on every label; gold elsewhere only as lines, prices and the primary action.
- Caslon Display (single weight 400) for names, headings and prices; wide, tracked Archivo for spec lines.
- Hairline-ruled lists and accordions instead of cards and icon grids.
- Near-square corners (2px) on actions; labels and photos are sharp.
- Motion is slow and settling (expo-out), always gated by reduced-motion.

## Colors

A near-monochrome black-and-white label system with one metallic accent used as stamping.

### Primary
- **JD Gold** (jd-gold): the brand gold from the logo. Primary button fill, package and extras prices, the double hairline on labels, the gradient section rule, list-bullet dashes, accordion plus icons, before/after slider line and knob, text selection, focus ring on the black ground, skip link.
- **Bright Gold** (gold-bright): hover state for gold fills and for links on the black ground. Never a resting color.

### Neutral
- **Bottle Black** (ink): page background, header base (88% with blur), package rows, text on gold buttons, theme-color.
- **Raised Black** (ink-raised): the one tonal step up. Hover fill on package rows and the background of the before/after band.
- **Hairline Black** (ink-rule): every 1px divider on the dark ground: header and footer borders, the 1px gaps between package rows, FAQ, extras and dry-ice list rules, the mobile dock seams.
- **Label White** (paper): label cards, brand tile behind the header logo, inverted button text.
- **Warm Off-White** (text-on-ink): body text on black; slightly warm, never pure white.
- **Warm Stone** (muted-on-ink): leads, captions, metadata, nav links, FAQ answers, legal body copy.
- **Label Ink** (label-text): text on white labels and the outline button on labels.
- **Label Grey** (label-muted): secondary text, captions and spec lines on labels.

### Named Rules
**The Stamping Rule.** Gold is foil, not paint: lines, prices, the primary action and the slider handle. It never fills a section, a card or a large block of body text.

**The Large-Gold-On-White Rule.** On a white label, gold appears only as the hairline frame and the primary button fill; gold text on white is never set small. On the black ground, gold text (prices, "Alles aus …, dazu:" lines) is legible and allowed.

**The Two-Grounds Rule.** There are exactly two grounds: Bottle Black and Label White. Each has its own text pair (text-on-ink / muted-on-ink and label-text / label-muted); never mix a pair across grounds.

## Typography

**Display Font:** Caslon Display (self-hosted Libre Caslon Display, with Georgia, serif)
**Body Font:** Archivo variable (self-hosted, width axis 62–125%, with system-ui)

**Character:** A sharp, high-contrast British display serif carries the product names and prices the way a cosmetics label carries its brand line; a grotesque stretched wide carries the specifications. The pairing is the label itself: name large and classical, small print wide and engineered.

### Hierarchy
- **Display** (400, clamp(2.4rem, 6vw, 4.6rem), 1.05, -0.01em): section headings (h2). Balanced wrapping.
- **Headline** (400, clamp(2.3rem, 5.4vw, 3.9rem), 1.05): the h1 on the hero label; legal page h1 at clamp(2.4rem, 6vw, 4rem).
- **Title** (400, clamp(1.6rem, 3vw, 2.1rem), 1.05): h3 for groups, the price list and extras. FAQ questions use the same serif at clamp(1.3rem, 2.4vw, 1.7rem), 1.2.
- **Price** (400 serif, clamp(1.6rem, 3.4vw, 2.4rem), tabular lining numerals): package name and price share this size so name and price read as one label line. Prefix words ("ab", "Preis") drop to 0.8rem Archivo in muted stone.
- **Body** (400, 1.0625rem, 1.6): paragraphs capped at 64ch; legal text at 70ch.
- **Lead** (400, clamp(1.1rem, 1.6vw, 1.3rem), muted stone): the sentence next to a section heading, capped at 52ch.
- **Label / Spec** (700, 0.8rem, 0.18em tracking, uppercase, width 125%): label footers ("Puderbach · Westerwald", "Est. 2022"), package durations, the "Inhalt" toggle, contact field names.
- **Button / Nav** (600–700, 0.85–0.95rem, 0.04–0.06em, width 112%): actions, nav links, the header phone number.

### Named Rules
**The One-Weight Serif Rule.** Caslon Display is used at weight 400 only; hierarchy comes from size, never from bolding the serif.

**The Tabular Price Rule.** Every price, phone number and figure is set with tabular lining numerals so columns of prices align.

**The Spec-Line Rule.** Wide tracked uppercase is metadata belonging to the thing it describes (a label footer, a duration, a field name). It is not a heading prefix and never sits above a section heading.

## Layout

A single centered column `min(100% - 2 × gutter, 1240px)` with a fluid gutter of clamp(1rem, 4vw, 3rem). Sections breathe with clamp(4.5rem, 10vw, 8rem) vertical padding; a section that continues the previous one drops its top padding so related bands read as one.

Section heads are a two-column grid from 900px (1.1fr heading / 1fr lead plus gold rule), aligned to the baseline end; below, they stack with 1.2rem gap. Content splits are asymmetric and ratio-based (1.15fr/0.85fr, 1.35fr/1fr, 0.9fr/1.1fr, 1.2fr/1fr), never equal thirds. The gallery is a dense grid of 2 columns on mobile and 4 from 900px, mixing 4:5 portrait tiles with 2-column 16:9 wide tiles.

The hero is full-viewport (100svh) own photography with the white label anchored bottom-left, max 37rem wide. The fixed header is 4rem tall; anchor scrolling is offset by 5rem. Breakpoints in use: 560px (stacked buttons, smaller logo), 760/761px (mobile dock on/off, package body columns), 860px (nav hidden), 900px (multi-column layouts).

On phones a fixed two-cell dock (WhatsApp in gold, call in black) slides up from the bottom once the hero leaves the viewport, padded for the safe-area inset; the footer reserves 7rem below it.

## Elevation & Depth

Flat by default. The black ground is layered tonally (Bottle Black, Raised Black) and divided by 1px Hairline Black rules. Real shadow belongs to the label alone: a white label lifts off the bottle with a long soft drop, the way a sticker on a curved bottle catches light. The only other shadow is on the gold slider knob, which is a physical handle.

### Shadow Vocabulary
- **Label lift** (`box-shadow: 0 30px 60px -20px rgb(0 0 0 / .6), 0 2px 6px rgb(0 0 0 / .3)`): every white label card (hero, price list, contact).
- **Handle** (`box-shadow: 0 6px 18px rgb(0 0 0 / .45)`): the round before/after knob.
- **Glass header** (88% Bottle Black plus `backdrop-filter: saturate(140%) blur(10px)`): the fixed header only.

### Named Rules
**The Only-Labels-Lift Rule.** Shadows belong to labels and physical handles. Rows, photos, buttons and dark panels stay flat; hover on dark rows is a tonal step to Raised Black, not a shadow.

## Shapes

Rectilinear and crisp. Labels, photographs, package rows and the dock are sharp-cornered. Actions, the header brand tile and the focus ring take a 2px corner, just enough to read as pressed rather than cut. Only two things are round: the slider knob and the lightbox close button, both circular handles.

The signature form is the label frame: a 1px gold line inset 8px from the label edge, with a second gold line 4px inside it separated by a 3px white band (a double hairline drawn with an inset border plus inset box-shadows). Dividers are always 1px: Hairline Black on the dark ground, a pale warm grey hairline on labels, and a horizontal gold-to-transparent gradient rule under section leads. List bullets are short 0.55rem gold dashes, never dots or icons.

## Components

### Buttons
Confident, compact, letterspaced; two variants only.
- **Shape:** near-square (2px), min height 3.25rem, inline icon at 1.25em with 0.6em gap.
- **Primary (WhatsApp):** JD Gold fill with Bottle Black text, wide 112% Archivo bold. The one gold action per group.
- **Secondary (Call):** 1px outline in currentColor; Label Ink on white labels, Warm Off-White on the black ground. Hover inverts to a solid fill.
- **Hover / Active:** color transitions at 0.25s expo-out; active presses down 1px.
- **Pairing:** WhatsApp always leads, Call follows. Below 560px the pair becomes two equal columns.

### Label Card (signature)
- **Corner Style:** sharp.
- **Background:** Label White with Label Ink and Label Grey text.
- **Shadow Strategy:** Label lift (see Elevation).
- **Border:** the double gold hairline frame inset 8px.
- **Internal Padding:** fluid, from about 1.6rem up to 2.6–3.4rem.
- **Use:** only for the content a customer reads closely: the hero introduction, the itemized price list, the contact block. A label may end in a footer of spec lines above a pale hairline.

### Package Series (accordion)
- A stack of `details` rows separated by 1px Hairline Black gaps inside a hairline border.
- Summary row: serif name left, gold serif price right, spec-line duration below, "Inhalt" toggle with a plus that rotates 45° to an x when open (0.35s expo-out).
- Hover steps the row to Raised Black. Open body is two columns from 760px: gold-dash bullet list, muted note.
- Inheritance lines ("Alles aus Basic, dazu:") are gold spec lines on black.

### Price Rows
- On labels: a table with 1px pale hairlines, regular service name left, bold tabular price right, caption below in Label Grey.
- On black: definition rows with name left, bold gold price right, Hairline Black rule under each.

### FAQ
- Hairline-ruled `details` list, max 56rem wide. Question in Caslon at title scale with a gold plus that rotates to an x; answer in muted stone.

### Navigation
- Fixed glass header, 4rem: white brand tile holding the logo, then "JD Brüder" in Caslon with 0.06em tracking.
- Links: Archivo 600, 0.85rem, width 112%, 0.06em tracking, Warm Stone; hover to Warm Off-White. Hidden below 860px, where the mobile dock takes over contact.
- Header phone number sits right in gold, tabular, never wrapping.

### Before/After Slider
- 4:5 frame, max 82vh, two stacked images with the "after" clipped from a CSS position variable.
- 2px gold vertical line and a 3rem round gold knob with chevrons, carrying the handle shadow. A transparent native range input covers the frame for touch and keyboard; keyboard focus outlines the knob in white.
- Corner tags on 75% black.

### Gallery and Lightbox
- Dense grid of own photos; hover scales the image 1.03 and brightens 8% over 0.8s.
- Native `dialog` lightbox on a 90% black backdrop, image capped at 94vw × 86vh, caption in muted stone, round outlined close button fixed top right.

### Motion
- One easing for everything: expo-out `cubic-bezier(.16, 1, .3, 1)`.
- Hero entrance: the label peels on top-down (clip-path reveal plus 1.5rem rise, 1.1s, 0.15s delay) while the photo settles from 106% scale and 60% brightness over 2.4s. Both only under `prefers-reduced-motion: no-preference`; smooth scrolling is also disabled under reduced motion.

## Do's and Don'ts

### Do:
- **Do** keep the ground Bottle Black (#0d0d0d) and put closely-read content on white labels with the double gold hairline inset 8px.
- **Do** use gold as stamping only: hairlines, prices, the primary WhatsApp action, list dashes, accordion plus icons, the slider handle.
- **Do** set every package name and price in Caslon Display 400 at the same size, prices with tabular lining numerals.
- **Do** use wide (125%), bold, 0.18em-tracked uppercase Archivo for metadata that belongs to an item: place, year, duration, field names.
- **Do** separate dark content with 1px Hairline Black rules and step hovers to Raised Black instead of adding shadows.
- **Do** pair WhatsApp (gold fill) first and Call (outline) second, with buttons at least 3.25rem tall.
- **Do** use own workshop photography full-bleed or in the dense 4:5 / 16:9 grid.
- **Do** gate every entrance animation behind `prefers-reduced-motion: no-preference` and use the single expo-out curve.

### Don't:
- **Don't** fill sections or cards with gold, or set small gold text on a white label.
- **Don't** bold the Caslon serif or substitute a system serif for display text.
- **Don't** put spec-line caps above a section heading as a prefix; spec lines describe items, they don't announce sections.
- **Don't** add shadows to rows, photos or buttons; only labels and the slider knob lift.
- **Don't** round labels, photos or rows; corners stay sharp, actions take 2px.
- **Don't** use pure white body text or pure black grounds; the text is warm off-white and the ground is near-black.
- **Don't** recolor, distort or add effects to the logo; on black it always sits on a white tile or label.

## Revision after finish review (Nov 2026)

- No oversized gold statistic: facts such as the dry-ice temperature sit in running copy. Do not reintroduce a hero-metric numeral.
- An opened package renders its contents as a white label (paper ground, double gold hairline inset 7px); the "Alles aus …, dazu" line is ink with a gold underline rule, never small gold on white.
- The header carries the "JD Brüder" Caslon wordmark only; the full logo appears once, on the hero label (hidden under 561px, where the header wordmark carries the brand).
- Focus rings inside white labels switch to ink (#111) for ≥3:1 contrast.
- Gallery: 8 sharp own shots, uniform 4:5 tiles, no frames with baked-in watermarks.
- Vehicle-size surcharge (Bus/SUV/Transporter + 50–100 €) is stated once under the package list.
