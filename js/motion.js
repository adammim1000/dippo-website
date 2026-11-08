// Motion & micro-interaction Dippo. Tanpa library; hanya Intersection Observer + CSS.
// Semua efek JS dilewati bila pengguna memilih "kurangi animasi"; fungsi situs tetap jalan.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const fine = matchMedia('(pointer:fine)').matches;
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* 1. Panah di tombol/tautan bergeser saat hover (teks tidak berubah) */
  $$('a.btn,.ab a,.cn a').forEach(a => {
    const n = a.lastChild; if (!n || n.nodeType !== 3) return;
    const m = n.textContent.match(/\s*([→↗])\s*$/); if (!m) return;
    n.textContent = n.textContent.slice(0, m.index) + ' ';
    const sp = document.createElement('span'); sp.className = 'mo-arr'; sp.setAttribute('aria-hidden', 'true'); sp.textContent = m[1]; a.appendChild(sp);
  });

  if (reduce) return;

  /* 2. Entrance hero: bertahap, tidak menahan konten */
  $$('.hero').forEach(h => {
    const items = [];
    if (h.tagName === 'DIV') { // halaman layanan
      const copy = h.querySelector('.wrap>div:first-child');
      if (copy) [...copy.children].forEach((el, i) => items.push([el, 80 + i * 90, 0]));
      const m = h.querySelector('.mascot'); if (m) items.push([m, 260, 1]);
      $$('.fb,.chat', h).forEach((el, i) => items.push([el, 700 + i * 140, 1]));
    } else { // Beranda & Portofolio: teks sudah punya entrance sendiri, kartu melayang menyusul
      $$('.fl', h).forEach((el, i) => items.push([el, 650 + i * 150, 1]));
    }
    items.forEach(([el, d, pop]) => { el.classList.add('mo-i'); if (pop) el.classList.add('mo-s'); el.style.setProperty('--mo-d', d + 'ms'); });
    requestAnimationFrame(() => requestAnimationFrame(() => h.classList.add('mo-go')));
    setTimeout(() => { items.forEach(([el]) => { el.classList.remove('mo-i', 'mo-s'); el.style.removeProperty('--mo-d'); }); h.classList.remove('mo-go'); }, 2400);
  });

  /* 3. Reveal saat scroll untuk elemen yang belum punya reveal */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const t = e.target; t.classList.add('in'); io.unobserve(t);
      setTimeout(() => { t.classList.remove('mo-rv', 'in'); t.style.removeProperty('--mo-d'); }, 1300);
    }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    const groups = ['.pf-head', '.pf-box', '.pf-filter', '.pf-tile', '.pf-ctab', '.promo', '.sl', '#industri .ind>*'];
    groups.forEach(sel => $$(sel).forEach((el, i) => {
      if (el.classList.contains('rv') || el.closest('.rv')) return;
      el.classList.add('mo-rv'); el.style.setProperty('--mo-d', (i % 3) * 80 + 'ms'); io.observe(el);
    }));
  }

  /* 4. FAQ: buka-tutup dengan animasi tinggi */
  $$('details').forEach(d => {
    const s = d.querySelector('summary'); if (!s) return; let a = null;
    s.addEventListener('click', e => {
      e.preventDefault();
      if (a) { a.cancel(); a = null; }
      const willOpen = !d.open, from = d.offsetHeight; let to;
      d.style.overflow = 'hidden';
      if (willOpen) { d.open = true; to = d.offsetHeight; }
      else { const c = getComputedStyle(d); to = s.offsetHeight + parseFloat(c.paddingTop) + parseFloat(c.paddingBottom) + parseFloat(c.borderTopWidth) + parseFloat(c.borderBottomWidth); }
      a = d.animate({ height: [from + 'px', to + 'px'] }, { duration: 340, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' });
      a.onfinish = () => { d.open = willOpen; a.cancel(); a = null; d.style.overflow = ''; };
    });
  });

  /* 5. Filter portofolio: kartu yang tampil muncul bergantian */
  $$('.pf-filter button').forEach(b => b.addEventListener('click', () => setTimeout(() => {
    let i = 0;
    $$('.pf-tile:not([hidden])').forEach(t => {
      if (t.classList.contains('mo-rv')) return; // belum sempat di-reveal
      t.style.setProperty('--mo-d', (i++ % 6) * 45 + 'ms');
      t.classList.remove('mo-pop'); void t.offsetWidth; t.classList.add('mo-pop');
      setTimeout(() => { t.classList.remove('mo-pop'); t.style.removeProperty('--mo-d'); }, 900);
    });
  }, 20)));

  /* 6. Maskot: klik untuk menyapa */
  $$('.hero img[src*="maskot"]').forEach(img => {
    let busy = false;
    img.addEventListener('click', () => {
      if (busy) return; busy = true;
      img.animate([{ rotate: '0deg' }, { rotate: '-7deg' }, { rotate: '6deg' }, { rotate: '-3deg' }, { rotate: '0deg' }], { duration: 750, easing: 'ease-out' });
      const host = img.parentElement, hi = document.createElement('span');
      hi.className = 'mo-hi'; hi.setAttribute('aria-hidden', 'true'); hi.textContent = 'Halo! 👋'; host.appendChild(hi);
      const k = [{ opacity: 0, translate: '0 8px', scale: .9 }, { opacity: 1, translate: '0 0', scale: 1 }];
      hi.animate(k, { duration: 300, easing: 'cubic-bezier(.3,1.5,.5,1)', fill: 'forwards' });
      setTimeout(() => hi.animate([...k].reverse(), { duration: 260, fill: 'forwards' }).onfinish = () => { hi.remove(); busy = false; }, 1500);
    });
  });

  /* 7. Parallax ringan di hero halaman layanan (kursor halus saja) */
  if (fine) {
    const h = document.querySelector('div.hero');
    if (h) {
      const set = [['.mascot img', 14], ['.fb', -10], ['.chat', 8]].map(([s, d]) => [h.querySelector(s), d]).filter(x => x[0]);
      h.addEventListener('pointermove', e => {
        const r = h.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        set.forEach(([el, d]) => { el.style.translate = `${x * d}px ${y * d}px`; });
      });
      h.addEventListener('pointerleave', () => set.forEach(([el]) => { el.style.translate = ''; }));
    }
  }
})();
