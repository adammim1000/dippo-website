// Menu dan tombol WhatsApp ada di js/shared.js. Nomor WhatsApp dan email juga diubah di sana.
document.getElementById('site-footer').innerHTML = `
<footer><div class="wrap">
  <div><b>Dippo</b><br>Digital Solution &amp; Creative Services<br>© 2026 Dippo. Semua hak dilindungi.</div>
  <div><b>Layanan</b><a href="dippo-ai.html">Dippo AI</a><a href="dippo-creative.html">Dippo Creative</a><a href="dippo-edu.html">Dippo Edu</a><a href="portofolio.html">Portofolio</a></div>
  <div><b>Kontak</b><a href="mailto:${EMAIL}">${EMAIL}</a><a href="https://wa.me/${NOMOR_WA}">${NOMOR_TAMPIL}</a><a href="kontak.html">Isi formulir</a></div>
</div><div class="mega" aria-hidden="true">DIPPO</div></footer>`;

// Animasi masuk untuk judul halaman layanan
document.querySelectorAll('.sub h1,.sub .lead,.sub .btns').forEach((el, i) => { el.classList.add('up'); el.style.setProperty('--i', i); });

// Bilah progres scroll
const prog = document.createElement('div'); prog.className = 'prog'; document.body.prepend(prog);
addEventListener('scroll', () => { prog.style.transform = `scaleX(${scrollY / (document.documentElement.scrollHeight - innerHeight || 1)})`; }, { passive: true });

// Animasi saat scroll
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    const t = e.target; if (!e.isIntersecting) return;
    t.classList.add('in'); if (t.classList.contains('svc')) t.classList.add('live'); io.unobserve(t);
    if (t.classList.contains('rv')) setTimeout(() => t.classList.remove('rv', 'in'), 1500);
  }), { threshold: .2 });
  document.querySelectorAll('main h2').forEach(h => {
    if (h.closest('.hero') || h.closest('.sub')) return;
    h.innerHTML = h.textContent.split(' ').map((w, i) => `<span class="w"><span style="--k:${i}">${w}</span></span> `).join('');
    h.classList.add('split'); io.observe(h);
  });
  document.querySelectorAll('main .card,main details,main .step,main .svc,main .tabs,main .panel.on').forEach(el => {
    if (el.closest('.hero') || el.closest('.sub')) return;
    el.style.setProperty('--d', [...el.parentNode.children].indexOf(el) % 4 * 90 + 'ms');
    el.classList.add('rv'); io.observe(el);
  });
}

// Efek kedalaman di hero mengikuti kursor
const hero = document.querySelector('.hero');
if (hero && matchMedia('(pointer:fine)').matches) hero.addEventListener('pointermove', e => {
  const r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  hero.querySelectorAll('[data-d]').forEach(el => { const d = +el.dataset.d; el.style.translate = `${x * d}px ${y * d}px`; });
});

// Sorotan kursor pada kartu
document.querySelectorAll('.card,.svc').forEach(c => c.addEventListener('pointermove', e => {
  const r = c.getBoundingClientRect();
  c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px');
}));

// Tab layanan
document.querySelectorAll('[role=tab]').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('[role=tab]').forEach(x => x.setAttribute('aria-selected', x === t));
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('on', p.id === t.getAttribute('aria-controls')));
}));

// Teks berjalan
const mq = document.querySelector('.marq div');
if (mq) mq.innerHTML += mq.innerHTML;

// Formulir kontak -> WhatsApp
const form = document.getElementById('form-kontak');
if (form) {
  const jasa = new URLSearchParams(location.search).get('jasa');
  if (jasa) form.jasa.value = jasa;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const teks = `Halo Dippo, saya ingin berkonsultasi.\n\nNama: ${form.nama.value}\nJasa: ${form.jasa.value}\nKebutuhan: ${form.pesan.value}`;
    location.href = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(teks)}`;
  });
}

// ===== Interaksi tambahan: miring 3D, tombol magnet, zoom saat scroll =====
const halus = matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches;
if (halus) {
  // Elemen melayang di etalase layanan bergeser halus mengikuti kursor
  document.querySelectorAll('.svc').forEach(c => {
    const els = c.querySelectorAll('[data-d]');
    c.addEventListener('pointermove', e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      els.forEach(el => { const d = +el.dataset.d; el.style.translate = `${x * d}px ${y * d}px`; });
    });
    c.addEventListener('pointerleave', () => els.forEach(el => { el.style.translate = ''; }));
  });
  document.querySelectorAll('.btn,nav a.cta').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      b.style.translate = `${(e.clientX - r.left - r.width / 2) * .22}px ${(e.clientY - r.top - r.height / 2) * .3}px`;
    });
    b.addEventListener('pointerleave', () => { b.style.translate = ''; });
  });
}
if (hero) addEventListener('scroll', () => hero.style.setProperty('--zs', 1 - Math.min(scrollY / 1600, .16)), { passive: true });
const cf = document.querySelector('.cta-final');
if (cf && 'IntersectionObserver' in window) {
  cf.classList.add('zin');
  const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { cf.classList.add('in'); o.disconnect(); } }), { threshold: .25 });
  o.observe(cf);
}
