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

// Kontaktleiste auf dem Handy erst nach dem ersten Bildschirm einblenden
const dock = document.querySelector('.dock');
const hero = document.querySelector('.hero');
if (dock && hero && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => dock.classList.toggle('show', !entry.isIntersecting), { threshold: 0.15 }).observe(hero);
} else if (dock) {
  dock.classList.add('show');
}
