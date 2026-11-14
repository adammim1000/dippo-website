/* Kartu gambar ikut bergerak halus mengikuti kursor, dan frame layanan muncul saat discroll. */
(() => {
  document.documentElement.classList.add('js');
  const frames = document.querySelectorAll('.rs-card,.rw-cta-frame,.rw-frame,.rw-card');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
    frames.forEach(f => io.observe(f));
  } else frames.forEach(f => f.classList.add('in'));

  if (!matchMedia('(hover:hover)').matches || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  document.querySelectorAll('.rh-frame,.rs-card').forEach(box => {
    box.addEventListener('pointermove', e => {
      const r = box.getBoundingClientRect();
      box.style.setProperty('--px', ((e.clientX - r.left) / r.width - .5) * -2);
      box.style.setProperty('--py', ((e.clientY - r.top) / r.height - .5) * -2);
      box.style.setProperty('--mx', (e.clientX - r.left) + 'px'); box.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    box.addEventListener('pointerleave', () => { box.style.setProperty('--px', 0); box.style.setProperty('--py', 0); });
  });
})();
