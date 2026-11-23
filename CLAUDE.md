# JD Brüder Website – Regeln für Claude

Website von JD Brüder GbR (Fahrzeugaufbereitung, Puderbach). Live unter **https://www.jd-brueder.de**, gehostet mit GitHub Pages direkt aus `main` dieses Repos. Reines HTML/CSS/JS, kein Build, keine Abhängigkeiten.

Vor jeder gestalterischen Änderung `DESIGN.md` (Design-System) und `PRODUCT.md` (Zielgruppe, Marke, Grenzen) lesen.

## Ablauf bei Änderungen

1. Zuerst `git pull`, denn Dominik und David ändern beide an der Seite.
2. Änderung machen, dann lokal ansehen (`python3 -m http.server 8765` in diesem Ordner, dann http://localhost:8765, Seite im Handy-Format prüfen, etwa 95 % der Besucher kommen mit dem Handy).
3. Dem Nutzer zeigen, was sich ändert (Screenshot oder kurze Beschreibung), und **auf sein Okay warten**.
4. Erst dann committen und auf `main` pushen. Nach etwa einer Minute ist die Änderung live, also danach einmal auf https://www.jd-brueder.de prüfen.

Commit-Nachrichten auf Deutsch, kurz, was und warum.

## Inhalt

- Kunden werden gesiezt. Ton: freundlich, bodenständig, ohne Übertreibung.
- Nichts erfinden: keine Bewertungen, Garantien oder Versprechen, die die Inhaber nicht bestätigt haben. Preise sind Richtpreise („ab …“).
- Nur eigene Fotos aus der Werkstatt, keine Stock- oder KI-Bilder als eigene Arbeit, keine lesbaren Kennzeichen. Bilder als `.webp` nach `img/w/`, klein halten.
- Der Geschäftsbereich „Montage“ kommt auf der Seite (noch) nicht vor.
- Telefon, WhatsApp-Link und E-Mail stehen an mehreren Stellen (Kopf, Kopfbild, Fenster der Kacheln, Kontakt, runder WhatsApp-Knopf, Schema.org-Block in `index.html`, `impressum.html`, `datenschutz.html`). Bei Änderung überall gleich ändern.

## Nicht anfassen ohne Rücksprache mit Dominik

- `CNAME`: verbindet die Domain mit der Seite. Löschen oder ändern nimmt www.jd-brueder.de offline.
- `404.html`: leitet alte Links der früheren Wix-Seite auf die Startseite.
- **Anfrageformular** (`#sheet-anfrage` in `index.html`, Ende von `main.js`): Es schickt Anfragen an das Google-Skript der App JD Vertrieb (Repo `jdbrueder-collab/jd-vertrieb`, `apps-script/vertrieb.gs`). Die Adresse `ANFRAGE_API` und die Antwort-Schlüssel `referenzauto`, `leasing`, `aufbereitung`, `folie`, `anderes` müssen zum Skript und zum Meta-Formular passen. Neue oder geänderte Fragen brauchen eine Änderung im Skript (macht Dominik) und im Datenschutz, Abschnitt 5.
- Datenschutz: Die Seite setzt keine Cookies, hat kein Tracking und keine eingebetteten Inhalte (Google Maps, Instagram, YouTube nur als Link). Wer so etwas einbauen will, muss `datenschutz.html` mit anpassen und vorher fragen.

## Was hier nicht geht

Domain und DNS (bei Wix), die App JD Vertrieb, Lexware und die Meta-Anzeigen liegen außerhalb dieses Repos. Das macht Dominik.
