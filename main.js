// Preise: Reiter (Tabs) mit Pfeiltasten
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  for (const t of tabs) {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.querySelector(`[aria-labelledby="${t.id}"]`).hidden = !on;
  }
  if (focus) tab.focus();
  tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
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
// Leistungs-Kacheln öffnen den passenden Reiter
document.querySelectorAll('[data-tab]').forEach((link) => {
  link.addEventListener('click', () => {
    const tab = document.getElementById(link.dataset.tab);
    if (tab) selectTab(tab);
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
box?.querySelector('button').addEventListener('click', () => box.close());
box?.addEventListener('click', (e) => { if (e.target === box) box.close(); });

// Kontaktleiste auf dem Handy erst nach dem ersten Bildschirm
const dock = document.querySelector('.dock');
const hero = document.querySelector('.hero');
if (dock && hero && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => dock.classList.toggle('show', !entry.isIntersecting), { threshold: 0 }).observe(hero);
} else if (dock) {
  dock.classList.add('show');
}
