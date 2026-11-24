// Umschalter Pakete / Einzelleistungen (Tabs mit Pfeiltasten)
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  for (const t of tabs) {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.querySelector(`[aria-labelledby="${t.id}"]`).hidden = !on;
  }
  if (focus) tab.focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (e) => {
    const map = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    selectTab(tabs[(map[e.key] + tabs.length) % tabs.length], true);
  });
});

// Kacheln öffnen ihr Fenster von unten
document.querySelectorAll('[data-sheet]').forEach((tile) => {
  tile.addEventListener('click', () => {
    const sheet = document.getElementById(tile.dataset.sheet);
    tile.closest('dialog.sheet')?.close();
    sheet.showModal();
    sheet.querySelector('.sheet-body').scrollTop = 0;
    // data-interesse wählt im Anfrageformular die passende Antwort schon aus (z. B. Referenzauto)
    const wahl = tile.dataset.interesse && sheet.querySelector(`input[name="interesse"][value="${tile.dataset.interesse}"]`);
    if (wahl) { wahl.checked = true; wahl.dispatchEvent(new Event('change', { bubbles: true })); }
  });
});

// Direktlink, z. B. index.html#sheet-folie, öffnet das passende Fenster sofort
const linked = location.hash.startsWith('#sheet-') ? document.getElementById(location.hash.slice(1)) : null;
if (linked?.matches('dialog.sheet')) linked.showModal();

// Alle Fenster: schließen per Knopf oder Tipp daneben
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog || e.target.closest('[data-close]')) dialog.close();
  });
});

// Menü auf dem Handy nach Klick schließen
const menu = document.getElementById('site-menu');
menu?.addEventListener('click', (e) => {
  if (e.target.closest('a') && menu.matches(':popover-open')) menu.hidePopover();
});

// Vorher/Nachher-Regler
const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.compare-frame').forEach((frame) => {
  const range = frame.querySelector('input[type="range"]');
  const set = () => frame.style.setProperty('--pos', range.value + '%');
  range.addEventListener('input', () => { frame.classList.add('is-used'); set(); });
  set();
  // Einmal von selbst hin und her wischen, sobald der Regler zu sehen ist
  if (ruhig || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    const punkte = [50, 82, 18, 50], dauer = 2400, t0 = performance.now();
    const schritt = (t) => {
      if (frame.classList.contains('is-used')) return;
      const x = Math.min((t - t0) / dauer, 1), seg = Math.min(Math.floor(x * 3), 2), f = x * 3 - seg;
      const weich = f < .5 ? 2 * f * f : 1 - (-2 * f + 2) ** 2 / 2;
      range.value = punkte[seg] + (punkte[seg + 1] - punkte[seg]) * weich;
      set();
      if (x < 1) requestAnimationFrame(schritt);
    };
    setTimeout(() => requestAnimationFrame(schritt), 300);
  }, { threshold: .6 });
  io.observe(frame);
});

// So läuft's: das Bild bleibt stehen und wechselt mit dem Schritt, der gerade auf Höhe der Lesemarke ist
document.querySelectorAll('[data-story]').forEach((story) => {
  const bilder = [...story.querySelectorAll('.story-stage img')];
  const schritte = [...story.querySelectorAll('.story-steps li')];
  const nummer = story.querySelector('[data-story-n]');
  const balken = story.querySelector('.story-bar');
  story.classList.add('is-live');
  bilder.forEach((b) => { b.loading = 'eager'; });
  let aktiv = -1, wartet = false;
  const zeige = () => {
    wartet = false;
    const marke = innerHeight * (innerWidth >= 900 ? .5 : .74);
    let i = 0;
    schritte.forEach((s, k) => { if (s.getBoundingClientRect().top < marke) i = k; });
    const r = story.querySelector('.story-steps').getBoundingClientRect();
    balken.style.setProperty('--p', Math.max(0, Math.min(1, (marke - r.top) / r.height)) * 100 + '%');
    if (i === aktiv) return;
    aktiv = i;
    bilder.forEach((b, k) => b.classList.toggle('is-on', k === i));
    schritte.forEach((s, k) => s.classList.toggle('is-on', k === i));
    nummer.textContent = String(i + 1).padStart(2, '0');
  };
  addEventListener('scroll', () => { if (!wartet) { wartet = true; requestAnimationFrame(zeige); } }, { passive: true });
  addEventListener('resize', zeige);
  zeige();
});

// Abschnitte sanft einblenden, wenn sie ins Bild kommen
if (!ruhig && 'IntersectionObserver' in window) {
  const rein = new IntersectionObserver((eintraege) => eintraege.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); rein.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.section-head, .tile, .work, .about > *, .faq-block, .contact-grid > *').forEach((el) => {
    if (el.getBoundingClientRect().top < innerHeight) return;
    el.classList.add('rv');
    if (el.matches('.tile')) el.style.setProperty('--d', [...el.parentNode.children].indexOf(el) * .08 + 's');
    rein.observe(el);
  });
}

// Galerie: Bild groß öffnen
const box = document.querySelector('dialog.lightbox');
const fig = box?.querySelector('figure');
document.querySelector('[data-gallery]')?.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link || !box?.showModal) return;
  e.preventDefault();
  const thumb = link.querySelector('img');
  const img = new Image();
  img.src = link.href;
  img.alt = thumb.alt;
  const cap = document.createElement('p');
  cap.textContent = thumb.alt;
  fig.replaceChildren(img, cap);
  box.showModal();
});

// Runder WhatsApp-Knopf: erscheint, sobald die Knöpfe im Kopfbereich aus dem Bild sind
const fab = document.querySelector('.fab');
const heroActions = document.querySelector('.hero .actions');
if (fab && heroActions && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => fab.classList.toggle('show', !entry.isIntersecting), { threshold: 0 }).observe(heroActions);
} else if (fab) {
  fab.classList.add('show');
}

// Öffnungszeiten: Mo–Fr 8–17 Uhr (deutsche Zeit)
const state = document.querySelector('[data-open-state]');
if (state) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Berlin', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false,
  }).formatToParts(new Date()).map((p) => [p.type, p.value]));
  const minutes = Number(parts.hour) * 60 + Number(parts.minute);
  const open = !['Sat', 'Sun'].includes(parts.weekday) && minutes >= 8 * 60 && minutes < 17 * 60;
  state.textContent = open ? 'Jetzt geöffnet' : 'Jetzt geschlossen';
  state.classList.toggle('is-open', open);
  state.hidden = false;
}

// Anfrageformular: eine Frage pro Schritt wie bei Meta. Die Antwort landet in JD Vertrieb (Tabelle „Website-Anfragen“).
const ANFRAGE_API = 'https://script.google.com/macros/s/AKfycbzYjAuA_iCfbLlwKT7o_UzdLNEe3P0EfnMejcjpMYat8qnJyQuO0sl8tEvW-ijtd6Fr/exec';
const form = document.querySelector('[data-anfrage]');
if (form) {
  const steps = [...form.querySelectorAll('[data-step]')];
  const fehler = form.querySelector('.form-error');
  const senden = steps[2].querySelector('[type="submit"]');
  let at = 0;
  const zeige = (i) => {
    steps.forEach((s, j) => { s.hidden = j !== i; });
    at = i;
    form.scrollTop = 0;
    (steps[i].querySelector('.input') || steps[i].querySelector('h3'))?.focus();
  };
  form.addEventListener('change', (e) => { if (e.target.name === 'interesse') zeige(1); });
  form.querySelectorAll('[data-back]').forEach((b) => b.addEventListener('click', () => zeige(at - 1)));
  form.closest('dialog').addEventListener('close', () => { if (at === 3) zeige(0); });
  // Tastatur am Handy: Das Fenster bleibt oben stehen und reicht nur bis zur Tastatur, statt dass iOS es verschiebt.
  const vv = window.visualViewport, fenster = form.closest('dialog');
  const passe = () => {
    if (!fenster.open || innerWidth >= 900) return;
    fenster.style.setProperty('--oben', vv.offsetTop + 'px');
    fenster.style.setProperty('--hoehe', vv.height + 'px');
    if (form.contains(document.activeElement)) document.activeElement.scrollIntoView({ block: 'nearest' });
  };
  vv?.addEventListener('resize', passe);
  vv?.addEventListener('scroll', passe);
  // Jeder Weiter-Knopf und Enter landen hier: erst die aktuelle Frage prüfen, dann weiter oder absenden
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (![...steps[at].querySelectorAll('input')].every((i) => i.reportValidity())) return;
    if (at < 2) return zeige(at + 1);
    senden.disabled = true;
    fehler.hidden = true;
    try {
      const r = await fetch(ANFRAGE_API, { method: 'POST', body: JSON.stringify({ aktion: 'anfrage', ...Object.fromEntries(new FormData(form)) }) });
      const j = await r.json();
      if (!j.ok) throw new Error(j.fehler);
      form.reset();
      zeige(3);
    } catch (err) {
      fehler.firstElementChild.textContent = err instanceof SyntaxError || err instanceof TypeError || !err.message
        ? 'Das hat leider nicht geklappt. Bitte versuchen Sie es gleich noch einmal.' : err.message;
      fehler.hidden = false;
    } finally {
      senden.disabled = false;
    }
  });
}
