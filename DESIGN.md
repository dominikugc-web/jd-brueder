---
name: JD Brüder
description: Car detailing in the Westerwald. A dark, phone-first workshop page with four fixed service tiles, details in bottom sheets and WhatsApp one tap away.
colors:
  black: "#000000"
  panel: "#111111"
  panel-2: "#181818"
  line: "#262626"
  text: "#f4f4f2"
  text-2: "#b3b2ad"
  gold: "#b49759"
  gold-hover: "#c7ab6e"
  white: "#ffffff"
  whatsapp: "#1da851"
  sheet-handle: "#3d3d3d"
  status-closed: "#8a8a86"
  status-open-text: "#9fe0a6"
  status-open-dot: "#4cc35a"
typography:
  sans: "Inter (variable, self-hosted) – all text"
  accent: "Instrument Serif Italic (self-hosted) – accents only"
  h1: "clamp(2.1rem, 4.6vw, 3.6rem) / 1.08, weight 600, -0.025em"
  h2: "clamp(1.85rem, 4vw, 3rem) / 1.08, weight 600, -0.025em"
  h3: "1.2rem / 1.25, weight 600"
  body: "1.0625rem / 1.6, weight 400"
  lead: "clamp(1.05rem, 1.5vw, 1.2rem), text-2"
  wordmark: "Inter 700, 1rem, uppercase, 0.14em tracking, gold"
  price: "Instrument Serif Italic in gold: 1.45rem on tiles, 1.8rem in package rows"
rounded:
  card: "14px (tiles, photos, panels)"
  small: "10px (gallery thumbs, menu items, logo plate)"
  sheet: "22px (top corners of the bottom sheet)"
  pill: "999px (buttons, menu button, segmented control)"
  focus: "4px"
motion:
  ease: "cubic-bezier(.22, 1, .36, 1)"
  durations: "0.2s colour changes, 0.3s accordion height, 0.38s sheet slide-up, 0.4s WhatsApp button"
---

# JD Brüder – Design System

This replaces the light "overview first" page (white and stone, prices in tabs). The brief on 15 Nov 2026: phone first (about 95 % of visitors), dark black-and-gold look, fixed tiles, not crowded, WhatsApp button bottom right. An earlier dark version was dropped because it felt cluttered, so the rule that matters most here is restraint.

## Principles

1. **Phone first, short page.** Hero → four service tiles → before/after → four steps → about + FAQ → contact. Prices live inside the sheets, not on the page. The page shrank from about 12 to about 7 phone screens.
2. **One strong image.** The hero shows one car, half neglected and half detailed, split by a thin gold line. Nothing else on the page competes with it.
3. **The gold line is the motif.** The same gold line divides the before/after slider. Gold otherwise marks action (primary buttons) and prices.
4. **Black is black.** Page ground is #000000, surfaces are #111111 with a 1px #262626 line. No gradients as decoration, no glow, no shadows on tiles.
5. **One accent face, two uses only.** Instrument Serif Italic for the second line of h1/h2 (in gold) and for prices. Never in body text, buttons, navigation or labels.
6. **No invented claims.** Prices are "ab"/Richtpreise. No reviews, guarantees or promises the owners have not confirmed.
7. **Real photos prove the work.** Only the hero is an AI illustration (stated in the Impressum). Tiles, sheets, before/after and gallery use the workshop's own photos.

## Components

**Header**: sticky, black at 82 % with blur. Gold wordmark left. On phones a round call button and the "Menü" button (native `popover`); from 900px inline links and a phone pill.

**Hero**: phone: image cropped to 10:9 from the top, fading into black, headline overlapping the fade, two full-width buttons (WhatsApp in gold, "Leistungen und Preise" as outline). From 900px the wide image fills the section and the text sits on the dark left third. Images: `img/w/hero-mobil.webp` (4:5) and `img/w/hero-desktop.webp` (16:9).

**Service tile** (`button.tile`): fixed 2×2 grid on phones, 4×1 from 900px, ratio 4:5. Photo, dark gradient from the bottom, name, "ab" price in the gold accent face, a small plus badge as the tap cue. "Trockeneis" has no own photo and shows a gold ice crystal instead. A tap opens the matching sheet (`data-sheet`).

**Bottom sheet** (`dialog.sheet`): native modal dialog, slides up from the bottom, max 90dvh, content scrolls inside. Head with title and close button, body with photo, one sentence, prices, fixed foot with "… anfragen" (WhatsApp, text pre-filled for that service) and a call button. Closes via the button, a tap on the backdrop, Esc or the back gesture. From 900px it is a centred window. A link like `index.html#sheet-folie` opens a sheet directly.

**Segmented control** (`.tablist`): "Pakete" / "Einzelleistungen" inside the Aufbereitung sheet. Selected segment is light with black text; arrow, Home and End keys work.

**Package row** (`details.pkg`): Basic, Premium, Luxus and Exklusiv stand below each other with name, duration and price. Each row opens to show what it adds to the package before ("Alles aus Basic, dazu:"); Basic is open by default. There is no comparison table and nothing scrolls sideways (owner request after testing on the phone, 15 Nov 2026).

**Price table** (`.pricetable`): as before, now on dark with gold prices.

**Before/after slider**: gold line and gold knob, "Vorher" and "Nachher" tags in the corners, transparent range input on top for touch and keyboard.

**Gallery**: six square thumbs in three columns, native `<dialog>` lightbox with the alt text as caption.

**Steps** (`ol.steps`): gold outlined numbers, only for the real four-step sequence.

**Logo plate**: the logo has black areas and vanishes on black. It is never recoloured; it sits on a white plate over the about photo at 152px width (brand minimum 150px).

**WhatsApp button** (`.fab`): round, 60px, bottom right, WhatsApp green with the white glyph (3.1:1). It appears once the hero buttons have left the viewport and stays above the safe area.

**Opening state** (`[data-open-state]`): Mo–Fr 8–17 Uhr in Europe/Berlin. Public holidays are not handled.

## Do / Don't

| Do | Don't |
|---|---|
| Put new details into a sheet or the FAQ | Add new long sections to the page |
| Keep exactly four tiles in the fixed grid | Add a fifth tile or mix tile sizes |
| Use gold for the main action, prices and the dividing line | Use gold for body text or decoration |
| Show own workshop photos as proof | Show AI or stock images as own work, or photos with readable number plates |
| Keep the logo on its white plate | Recolour the logo or place it directly on black |
