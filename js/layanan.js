// Halaman layanan (Dippo AI, Creative, Edu). Nomor WhatsApp dan email ada di js/shared.js.
document.querySelectorAll('[data-wa]').forEach(a => { a.href = 'https://wa.me/' + NOMOR_WA + (a.dataset.text ? '?text=' + encodeURIComponent(a.dataset.text) : ''); });
document.querySelectorAll('[data-nomor]').forEach(e => { e.textContent = NOMOR_TAMPIL; });
document.querySelectorAll('[data-email]').forEach(a => { a.href = 'mailto:' + EMAIL; a.textContent = EMAIL; });

// Formulir -> WhatsApp
const f = document.getElementById('f');
f.addEventListener('submit', ev => {
  ev.preventDefault();
  const d = new FormData(f);
  const t = 'Halo Dippo (' + f.dataset.jasa + '), saya ingin berkonsultasi.\n\nNama: ' + d.get('n') + '\nEmail: ' + (d.get('e') || '-') + '\nPerusahaan/Instansi: ' + (d.get('c') || '-') + '\nKebutuhan: ' + d.get('k') + '\n\n' + (d.get('m') || '');
  location.href = 'https://wa.me/' + NOMOR_WA + '?text=' + encodeURIComponent(t);
});

// Tombol "Pilih Paket" mengisi pesan di formulir
document.querySelectorAll('[data-paket]').forEach(a => a.addEventListener('click', () => {
  f.elements['m'].value = 'Saya tertarik dengan paket ' + a.dataset.paket + '.';
  const k = a.dataset.k, sel = f.elements['k'];
  if (k && sel) { for (const o of sel.options) { if (o.text === k) { sel.value = o.value; } } }
}));

// Carousel
document.querySelectorAll('.cn button').forEach(function (b) { b.addEventListener('click', function () { document.getElementById('car').scrollBy({ left: (b.dataset.d === 'n' ? 1 : -1) * 290, behavior: 'smooth' }); }); });
(function () { var c = document.getElementById('car'), d = false, x = 0, s = 0; c.addEventListener('mousedown', function (e) { d = true; x = e.pageX; s = c.scrollLeft; c.classList.add('drag'); }); window.addEventListener('mouseup', function () { d = false; c.classList.remove('drag'); }); c.addEventListener('mousemove', function (e) { if (d) { c.scrollLeft = s - (e.pageX - x); } }); })();

// Teks berjalan (kanan ke kiri)
document.querySelectorAll('.ticker div').forEach(function (d) { d.innerHTML += d.innerHTML; });

// Kolom sorotan yang melebar
document.querySelectorAll('.sl').forEach(function (sl) { var ps = sl.querySelectorAll('.sp'); function on(p) { ps.forEach(function (x) { x.classList.toggle('on', x === p); }); } ps.forEach(function (p) { ['mouseenter', 'focus', 'click'].forEach(function (ev) { p.addEventListener(ev, function () { on(p); }); }); }); });

// Sorotan kursor pada kartu
document.addEventListener('mousemove', function (e) { var c = e.target.closest && e.target.closest('.card'); if (c) { var r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); } });

// Muncul saat scroll
if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var t = e.target; t.classList.add('in'); io.unobserve(t); setTimeout(function () { t.classList.remove('rv', 'in'); t.style.transitionDelay = ''; }, 900); } }); }, { threshold: .12 });
  document.querySelectorAll('.card,.step,.chip,.band,section h2').forEach(function (el, i) { el.classList.add('rv'); el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); }); }
