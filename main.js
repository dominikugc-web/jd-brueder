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
    sheet.showModal();
    sheet.querySelector('.sheet-body').scrollTop = 0;
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
document.querySelectorAll('.compare-frame').forEach((frame) => {
  const range = frame.querySelector('input[type="range"]');
  const set = () => frame.style.setProperty('--pos', range.value + '%');
  range.addEventListener('input', set);
  set();
});

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
