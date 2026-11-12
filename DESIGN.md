---
name: JD Brüder
description: Car detailing in the Westerwald. A clear, light workshop page – overview first, prices in tabs, contact one tap away.
colors:
  white: "#ffffff"
  black: "#000000"
  stone: "#f3f3f1"
  line: "#e2e2df"
  line-dark: "#262626"
  text: "#1a1a1a"
  text-2: "#5b5b58"
  text-inv: "#f4f4f2"
  text-inv-2: "#b3b2ad"
  gold: "#b49759"
  gold-hover: "#c7ab6e"
typography:
  sans: "Inter (variable, self-hosted) – all text"
  accent: "Instrument Serif Italic (self-hosted) – accents only"
  h1: "clamp(2.1rem, 4.6vw, 3.6rem) / 1.08, weight 600, -0.025em"
  h2: "clamp(2rem, 4.2vw, 3.2rem) / 1.08, weight 600, -0.025em"
  h3: "1.25rem / 1.25, weight 600"
  body: "1.0625rem / 1.6, weight 400"
  lead: "clamp(1.1rem, 1.5vw, 1.25rem), text-2"
  small: "0.9–0.97rem for captions, durations, notes"
  price: "Instrument Serif Italic, clamp(1.8rem, 3vw, 2.2rem) in package rows, 1.6rem on cards"
rounded:
  card: "10px"
  pill: "999px (buttons, menu button)"
  focus: "4px"
motion:
  ease: "cubic-bezier(.22, 1, .36, 1)"
  durations: "0.2s colour changes, 0.3s accordion height, 0.4s dock, 0.6s image zoom on hover"
---

# JD Brüder – Design System

This replaces the earlier "Etikettenserie" (black ground, Caslon, label cards). The owner asked for the change because the page felt cluttered. All text is now Inter, and Instrument Serif italic is used only as an accent.

## Principles

1. **Overview first.** The page runs hero → four service cards → prices in tabs → before/after → about + FAQ → contact. Nothing else.
2. **Light by default, black for emphasis.** White and stone carry the content. Black is reserved for the before/after section, the contact block and the footer. The brand manual targets about 45 % white and 40 % black.
3. **Gold is for action.** It appears on the WhatsApp button (gold fill, black text, 7.5:1) and on the "Trockeneis" card face. Never use gold text on white.
4. **One accent face, two uses only.** Instrument Serif Italic appears in two places:
   - the second line of h1/h2 (`<span class="accent">`, rendered as its own line);
   - prices.
   It never appears in body text, buttons, navigation or labels.
5. **No invented claims.** Prices are "ab"/Richtpreise. Add no reviews, guarantees or promises the owners have not confirmed.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--white` | #ffffff | page ground |
| `--stone` | #f3f3f1 | services section ground |
| `--black` | #000000 | dark sections, footer |
| `--text` | #1a1a1a | body on white (17.4:1) |
| `--text-2` | #5b5b58 | secondary on white (6.8:1) / stone (6.1:1) |
| `--text-inv` / `--text-inv-2` | #f4f4f2 / #b3b2ad | text on black (9.9:1 for secondary) |
| `--line` / `--line-dark` | #e2e2df / #262626 | 1px dividers |
| `--gold` / `--gold-hover` | #b49759 / #c7ab6e | primary button, accents on black |
| `--radius` | 10px | cards, photos, menu |
| `--header-h` | 4.25rem | sticky header; also scroll-padding |

Headings use `font-size-adjust: from-font`, so the serif accent line matches Inter's x-height. Where that is unsupported, `.accent` falls back to 1.12em.

## Components

**Buttons** (`.btn`): pill shape, min-height 3rem, Inter 600.
- `.btn-gold` is the primary action (WhatsApp).
- `.btn-line` is the secondary action (Anrufen, and the phone number in the header). It inverts inside `.dark`.
- Icons are 1.2rem stroke SVGs (stroke 1.8), never emoji.

**Header**: sticky white bar with the "JD Brüder" wordmark (Inter 700), nav links and a phone pill. Under 900px the nav collapses into a native `popover` menu, opened by the "Menü" button. Tapping a link closes it.

**Hero**: two columns at ≥900px (text left, photo right at 5:6). On mobile it stacks, with the photo first at 4:3. It contains:
- the full logo at 170px (150px on mobile, the brand minimum);
- the h1 and the lead;
- two buttons;
- a row of three facts with icons.

**Service card** (`.service`): a 4:3 photo, an h3, one sentence, an "ab" price in the accent face and a "Zu den Preisen" link. The whole card links to `#preise` and selects the matching tab (`data-tab`). The dry-ice card has no own photo, so it uses a black face with the word in the gold accent.

**Price tabs**:
- `role="tablist"` with button tabs, arrow/Home/End keys and a roving tabindex.
- The panels share one grid cell and are switched with `hidden`.
- The selected tab gets the text colour plus a 3px underline drawn as a pseudo-element border, so colour is not the only cue.

**Package row** (`details.pkg`): a chevron and the package name, the duration below it, and the price on the right in the accent face. The body lists the contents. The "Alles aus …, dazu:" line is in text colour at weight 600. The height animates via `::details-content` and respects reduced-motion.

**Price table** (`.pricetable`): the caption serves as the title, rows are separated by 1px rules, and prices are right-aligned in tabular figures.

**Before/after slider**: two stacked images, with `clip-path` on the after image. A transparent `input[type=range]` on top handles keyboard and touch. The knob is white.

**Gallery**: four square tiles (2×2 on mobile, 4×1 on desktop) with a native `<dialog>` lightbox.

**Mobile dock**: a fixed WhatsApp + Anrufen bar under 761px. It appears once the hero has left the viewport. `scroll-padding-bottom` keeps anchored content clear of it.

## Do / Don't

| Do | Don't |
|---|---|
| Keep sections in the fixed order above | Add new long text sections; put details into the FAQ or a tab |
| Use the accent only for second lines of headings and prices | Italicise single words for emphasis, or set body text or buttons in the serif |
| Show own workshop photos | Use stock or manufacturer images as own work, or photos with readable number plates |
| Use gold for the main action | Use gold text on white |
