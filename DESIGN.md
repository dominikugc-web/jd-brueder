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
2. **One strong image.** The hero is a real photo from the hall: the car under the hexagon lights, framed so the workbench side is visible. Nothing else on the page competes with it.
3. **Gold marks action and prices.** Primary buttons, prices and the dividing line of the before/after slider. Nothing else.
4. **Black is black.** Page ground is #000000, surfaces are #111111 with a 1px #262626 line. No gradients as decoration, no glow, no shadows on tiles.
5. **One accent face, two uses only.** Instrument Serif Italic for the second line of h1/h2 (in gold) and for prices. Never in body text, buttons, navigation or labels.
6. **No invented claims.** Prices are "ab"/Richtpreise. No reviews, guarantees or promises the owners have not confirmed.
7. **Real photos only.** Every image is the workshop's own photo. The hero was tidied with AI (boxes removed, door closed, sharpened), which the Impressum states; the plate logo comes from the original photo.

## Components

**Header**: sticky, black at 82 % with blur. Gold wordmark left. On phones a round call button and the "Menü" button (native `popover`); from 1100px inline links and a phone pill.

**Hero**: phone: photo cropped to 10:9 with the car on the left and the workbench side on the right, the floor fading into black, headline overlapping the fade, two full-width buttons (WhatsApp in gold, "Leistungen und Preise" as outline). From 640px the full 16:9 photo sits on top. From 1100px the text stands left on black and the photo fills the right 64 %, shifted to show the workbench side and fading into black on its left edge. Images: `img/w/hero-halle-mobil.webp` (10:9) and `img/w/hero-halle.webp` (16:9). Over the photo a silent 8-second loop of the same M2 under the hexagon lights (`video/hero-m2.mp4`, 1280×720, about 1.2 MB, no plate visible) fades in once it plays; the photo stays as fallback. It does not start with "reduce motion" or data saver, and a small round pause button sits top right of the photo (WCAG 2.2.2).

**Promo pill** (`button.promo`): one at most, above the h1 in the hero. Gold outline, a gold "20 %" tag and a chevron; it opens its own sheet (`#sheet-referenzauto`) with the conditions. A button with `data-interesse` opens the inquiry sheet with that answer already chosen. Only offers the owners have confirmed. From 1100px the pill is hidden and a larger card (`aside.hero-promo`) sits bottom right over the hall photo: small label, "20 %" in the gold accent face, one line, an outline "Mehr anzeigen" button that opens the same sheet. No shadow, black at 66 % with blur.

**Service tile** (`button.tile`): fixed 2×2 grid on phones, 4×1 from 900px, ratio 4:5. Photo, dark gradient from the bottom, name, "ab" price in the gold accent face, a small plus badge as the tap cue. "Trockeneis" has no own photo and shows a gold ice crystal instead. A tap opens the matching sheet (`data-sheet`).

**Bottom sheet** (`dialog.sheet`): native modal dialog, slides up from the bottom, max 90dvh, content scrolls inside. Head with title and close button, body with photo, one sentence, prices, fixed foot with "… anfragen" (WhatsApp, text pre-filled for that service) and a call button. Closes via the button, a tap on the backdrop, Esc or the back gesture. From 900px it is a centred window. A link like `index.html#sheet-folie` opens a sheet directly.

**Inquiry sheet** (`#sheet-anfrage`): the same three questions as the Meta lead form plus e-mail, one per step ("Frage 1 von 3"). Step 1 is five large tap targets that advance on tap; the car is free text; then name, mobile number and e-mail with autofill. Selected answers get a gold border and dot. Opened by "Per Formular anfragen" (outline button in the hero and the contact section) or the direct link `#sheet-anfrage`. Answers are posted to the JD Vertrieb Apps Script and appear in the app like Meta leads.

**Price calculator** (`#rechner`, `form.calc`): one panel between the tiles and before/after. Car size (Pkw / SUV, Van oder Bus), package chips built from the Aufbereitung sheet (single source of prices), add-ons only for Leasingrückläufer, a switch for the 20 % Referenzauto offer. Result in the gold accent face, always "ab", counts up on change, old price struck through with the offer, contents of the package below, WhatsApp button with the choice pre-filled. Side by side from 900px.

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
