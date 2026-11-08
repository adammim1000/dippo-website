// Interaksi halaman Portofolio: tab demo, simulasi chatbot, brand preview, cek dokumen, filter, dan slider sebelum/sesudah.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const slow = matchMedia('(prefers-reduced-motion:reduce)').matches ? 0 : 1;
  const wait = ms => new Promise(r => setTimeout(r, ms * slow));

  /* ---------- Tab demo ---------- */
  const tabs = $$('.pf-tabs [role=tab]');
  const show = t => {
    tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
    $$('.pf-dm').forEach(p => { const on = p.id === t.getAttribute('aria-controls'); p.hidden = !on; p.classList.toggle('on', on); });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => show(t));
    t.addEventListener('keydown', e => {
      const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!k) return;
      const n = tabs[(i + k + tabs.length) % tabs.length]; n.focus(); show(n); e.preventDefault();
    });
  });

  /* ---------- Demo 1: chatbot toko ---------- */
  const msgs = $('#ai-msgs'), qr = $('#ai-qr'), form = $('#ai-form'), input = $('#ai-input'), rows = $('#ai-rows');
  const steps = $$('#ai-steps li');
  const rp = n => 'Rp' + n.toLocaleString('id-ID');
  const HARGA = 189000;
  let st, busy;
  const mark = (...ids) => steps.forEach(li => { const s = +li.dataset.s; li.classList.toggle('on', ids.includes(s)); if (ids.includes(s) && s > 2) li.classList.add('done'); });
  const bubble = (t, who) => { const d = document.createElement('div'); d.className = 'pf-b ' + who; d.textContent = t; msgs.append(d); msgs.scrollTop = msgs.scrollHeight; return d; };
  const chips = list => { qr.innerHTML = ''; list.forEach(t => { const b = document.createElement('button'); b.type = 'button'; b.textContent = t; b.addEventListener('click', () => send(t)); qr.append(b); }); };
  const say = async (texts, c) => {
    busy = true; qr.classList.add('off');
    for (const t of [].concat(texts)) {
      const ty = bubble('', 'bot ty'); ty.innerHTML = '<i></i><i></i><i></i>';
      await wait(650); ty.remove(); bubble(t, 'bot');
    }
    chips(c || []); busy = false; qr.classList.remove('off');
  };
  const MENU = ['Lihat katalog', 'Pesan kemeja putih', 'Jam buka', 'Bicara dengan admin'];
  const start = () => {
    msgs.innerHTML = ''; st = { step: null, size: null }; steps.forEach(li => li.classList.remove('on', 'done'));
    rows.innerHTML = '<tr class="empty"><td colspan="4">Belum ada pesanan. Coba pesan lewat chat.</td></tr>';
    say('Halo! Saya asisten Toko Contoh. Ada yang bisa saya bantu?', MENU);
  };
  const send = async raw => {
    const text = (raw || '').trim(); if (!text || busy) return;
    bubble(text, 'me'); input.value = ''; mark(1, 2);
    const l = text.toLowerCase();
    if (st.step === 'size') {
      const m = l.match(/\b(s|m|l|xl)\b/);
      if (!m) return say('Ukuran yang tersedia S, M, L, atau XL. Pilih salah satu ya.', ['S', 'M', 'L', 'XL']);
      st.size = m[1].toUpperCase(); st.step = 'qty'; return say('Berapa pcs yang kamu mau?', ['1', '2', '3']);
    }
    if (st.step === 'qty') {
      const q = parseInt(l.replace(/\D/g, ''), 10);
      if (!q || q > 20) return say('Tulis jumlahnya dalam angka, misalnya 2.', ['1', '2', '3']);
      st.step = null; const total = q * HARGA;
      rows.querySelector('.empty')?.remove();
      const tr = document.createElement('tr'); tr.className = 'new';
      tr.innerHTML = `<td>Kemeja Putih</td><td>${st.size}</td><td>${q}</td><td>${rp(total)}</td>`; rows.append(tr);
      await say([`Order dicatat: Kemeja Putih, ukuran ${st.size}, ${q} pcs. Total ${rp(total)} (harga contoh).`, 'Admin akan mengonfirmasi pembayaran lewat chat ini.'], ['Lihat katalog', 'Pesan lagi', 'Bicara dengan admin']);
      mark(1, 2, 3, 4); return;
    }
    if (/admin|cs\b|manusia|orang/.test(l)) { mark(1, 2, 5); return say('Baik, saya teruskan ke admin. Admin akan membalas di chat ini.', ['Lihat katalog', 'Jam buka']); }
    if (/pesan|beli|order/.test(l)) { st.step = 'size'; return say('Siap, Kemeja Putih seharga Rp189.000 (harga contoh). Ukuran apa?', ['S', 'M', 'L', 'XL']); }
    if (/katalog|produk|harga/.test(l)) return say('Katalog contoh: Kemeja Putih Rp189.000, Kaos Hitam Rp99.000, Tote Bag Rp59.000.', ['Pesan kemeja putih', 'Jam buka', 'Bicara dengan admin']);
    if (/jam|buka|tutup/.test(l)) return say('Toko contoh buka setiap hari pukul 09.00 sampai 21.00.', ['Lihat katalog', 'Pesan kemeja putih']);
    return say('Maaf, saya belum paham pertanyaan itu. Mau saya teruskan ke admin?', ['Bicara dengan admin', 'Lihat katalog']);
  };
  form.addEventListener('submit', e => { e.preventDefault(); send(input.value); });
  $('#ai-reset').addEventListener('click', () => { if (!busy) start(); });
  start();

  /* ---------- Demo 2: brand preview ---------- */
  const board = $('#cr-board'), name = $('#cr-name');
  const PAL = [['#7657E8', '#FFC83D', '#17172B'], ['#17172B', '#2DD4BF', '#7657E8'], ['#FFC83D', '#17172B', '#7657E8'], ['#E8553D', '#F7F6F2', '#17172B']];
  const paintBrand = () => {
    const n = name.value.trim() || 'Nama Brand';
    ['cr-word', 'cr-word2', 'cr-word3'].forEach(id => { $('#' + id).textContent = n; });
    const ini = n.charAt(0).toUpperCase(); $('#cr-ini').textContent = ini; $('#cr-ini2').textContent = ini;
  };
  name.addEventListener('input', paintBrand);
  $$('input[name=pal]').forEach(r => r.addEventListener('change', () => {
    const [a, b, c] = PAL[+r.value]; board.style.setProperty('--a', a); board.style.setProperty('--b', b); board.style.setProperty('--c', c);
  }));
  $$('input[name=font]').forEach(r => r.addEventListener('change', () => board.classList.toggle('clean', r.value === 'clean')));

  /* ---------- Demo 3: cek dokumen ---------- */
  const doc = $('#ed-doc'), ers = $$('.er', doc), pr = $('#ed-proof'), fm = $('#ed-fmt');
  ers.forEach(e => e.dataset.orig = e.textContent);
  const statEd = () => {
    const n = ers.filter(e => e.classList.contains('fixed')).length;
    $('#ed-s1 span').textContent = `Koreksi ejaan: ${n} dari ${ers.length}`; $('#ed-s1').classList.toggle('ok', n === ers.length);
    $('#ed-s2 span').textContent = fm.checked ? 'Format: sesuai pedoman' : 'Format: belum sesuai pedoman'; $('#ed-s2').classList.toggle('ok', fm.checked);
  };
  const fix = (e, on) => { e.classList.toggle('fixed', on); e.textContent = on ? (e.dataset.fix === ',' ? ',' : e.dataset.fix) : e.dataset.orig; };
  ers.forEach(e => e.addEventListener('click', () => { fix(e, !e.classList.contains('fixed')); statEd(); pr.checked = ers.every(x => x.classList.contains('fixed')); }));
  pr.addEventListener('change', () => { ers.forEach((e, i) => setTimeout(() => { fix(e, pr.checked); statEd(); }, i * 160 * slow)); });
  fm.addEventListener('change', () => { doc.classList.toggle('fmt', fm.checked); statEd(); });

  /* ---------- Filter portofolio ---------- */
  const grid = $('#pf-grid'), tiles = $$('.pf-tile', grid), fbtn = $$('.pf-filter button'), cnt = $('#pf-count');
  const layout = f => {
    const vis = tiles.filter(t => f === 'all' || t.dataset.cat === f);
    tiles.forEach(t => {
      const on = vis.includes(t);
      const span = f === 'all' ? t.dataset.span : (vis.length === 4 ? 6 : 4);
      t.style.setProperty('--span', span);
      if (on) { t.hidden = false; requestAnimationFrame(() => requestAnimationFrame(() => t.classList.remove('out'))); }
      else { t.classList.add('out'); setTimeout(() => { if (t.classList.contains('out')) t.hidden = true; }, 260 * slow); }
    });
    cnt.textContent = `Menampilkan ${vis.length} contoh` + (f === 'all' ? '' : ' ' + fbtn.find(b => b.dataset.f === f).textContent.replace(/\d+$/, '').trim());
  };
  tiles.forEach(t => t.style.setProperty('--span', t.dataset.span));
  fbtn.forEach(b => b.addEventListener('click', () => {
    fbtn.forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
    layout(b.dataset.f);
  }));

  /* ---------- Slider sebelum/sesudah ---------- */
  $$('.mk-cmp').forEach(c => { const r = $('.pf-rng', c); const set = () => c.style.setProperty('--pos', r.value + '%'); r.addEventListener('input', set); set(); });
})();
