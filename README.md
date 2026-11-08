# Website DIPPO (Digital Solution & Creative Services)

Website ini berisi 7 halaman: Beranda, Dippo AI, Dippo Creative, Dippo Edu, Harga, Portofolio, dan Kontak.
Dibuat dengan HTML, CSS, dan JavaScript biasa. Tidak perlu instal apa pun.

## Isi folder

```
dippo-website/
  index.html            Beranda
  dippo-ai.html         Halaman Dippo AI (warna biru)
  dippo-creative.html   Halaman Dippo Creative (warna ungu)
  dippo-edu.html        Halaman Dippo Edu (warna hijau)
  portofolio.html       Portofolio (segera hadir)
  kontak.html           Formulir yang mengirim ke WhatsApp
  css/style.css         Tampilan Beranda, Portofolio, Kontak
  css/layanan.css       Tampilan 3 halaman layanan, termasuk warna tiap halaman
  css/nav.css           Menu atas dan tombol WhatsApp (sama di semua halaman)
  js/shared.js          Nomor WhatsApp, email, menu atas, tombol WhatsApp (semua halaman)
  js/main.js            Animasi dan formulir Beranda, Portofolio, Kontak
  js/layanan.js         Animasi dan formulir 3 halaman layanan
  assets/maskot-dippo.png      Maskot utama (logo dan Beranda)
  assets/maskot-ai.png         Maskot halaman Dippo AI
  assets/maskot-creative.png   Maskot halaman Dippo Creative
  assets/maskot-edu.png        Maskot halaman Dippo Edu
```

## 1. Melihat website di komputermu

1. Ekstrak file zip. Klik kanan zip, pilih "Extract All" (Windows) atau klik dua kali (Mac).
2. Buka folder `dippo-website`.
3. Klik dua kali `index.html`. Website terbuka di browser.
4. Klik menu di atas untuk pindah halaman.

Catatan: font (Bricolage Grotesque dan Plus Jakarta Sans) sudah disimpan di folder `assets/fonts` dan dimuat lewat `css/fonts.css`, jadi tampil sama tanpa internet.

## 2. Cara mengubah teks

1. Instal editor gratis, misalnya Visual Studio Code (code.visualstudio.com). Notepad juga bisa.
2. Klik kanan file halaman, pilih "Open with" lalu pilih editor.
3. Cari teks yang ingin diganti, ubah, lalu simpan (Ctrl+S).
4. Refresh halaman di browser (F5) untuk melihat hasilnya.

Hati-hati: jangan hapus tanda `<` dan `>`. Ubah hanya tulisan di antaranya.

## 3. Mengganti nomor WhatsApp dan email

Sekarang cukup di SATU file untuk semua halaman:

1. Buka `js/shared.js`.
2. Di bagian paling atas ada tiga baris di bawah "UBAH DI SINI SAJA".
3. Ganti `NOMOR_WA` dengan nomor tanpa tanda + dan tanpa spasi, mulai dengan 62. Contoh: `6285889002998`.
4. Ganti `NOMOR_TAMPIL` (tulisan nomor di halaman) dan `EMAIL`.
5. Simpan. Tombol WhatsApp, footer, dan formulir di semua halaman ikut berubah.

Di file yang sama ada daftar `MENU` untuk mengubah isi menu atas.

## 3b. Tentang tiga halaman layanan

- `dippo-ai.html` memakai desain yang sama dengan website lama (dippo.netlify.app). `dippo-creative.html` dan `dippo-edu.html` memakai desain yang sama persis dengan isi berbeda.
- Ketiganya memakai `css/layanan.css` dan `js/layanan.js`.
- Warna tiap halaman diatur di bagian paling atas `css/layanan.css`, pada tiga blok: `body` (biru, Dippo AI), `body.t-creative` (ungu), dan `body.t-edu` (hijau). Ganti kode warna `--brand` pada blok yang diinginkan untuk mengubah warna utama halaman itu.
- Mengubah teks: buka file halamannya, lalu cari tulisan yang ingin diganti (contoh: judul besar ada di `<h1>`).
- Maskot tiap halaman ada di folder `assets`. Untuk menggantinya, ganti file PNG dengan nama yang sama.
- Formulir di halaman layanan mengirim isian ke WhatsApp, sama seperti halaman Kontak.

## 4. Mengganti harga dan isi paket

Harga ada di tiap halaman layanan, di bagian `id="harga"` (tepat di atas FAQ). Isinya mengikuti katalog harga Dippo AI, Creative, dan Edu.

1. Buka `dippo-ai.html`, `dippo-creative.html`, atau `dippo-edu.html`.
2. Tekan Ctrl+F lalu cari harga yang ingin diubah, misalnya `Rp1.499.000`.
3. Ganti angkanya. Fitur paket ada di baris `<li class="y">...</li>` (fitur termasuk paket) dan `<li class="n">...</li>` (fitur tidak termasuk, tampil pudar).
4. Banner diskon peluncuran: cari `Penawaran Peluncuran`. Hapus seluruh `<div class="promo">...</div>` kalau promo berakhir.
5. Tombol "Pilih Paket" otomatis mengisi pesan dan pilihan kebutuhan di formulir.
6. Kode Etik Dippo Edu ada di `dippo-edu.html`, bagian `id="kode-etik"`.
7. Gaya tampilan harga ada di bagian bawah `css/layanan.css`.

## 5. Mengisi portofolio nanti

1. Taruh gambar hasil kerja di folder `assets/`, misalnya `assets/proyek-1.jpg`.
2. Buka `portofolio.html`. Hapus isi di antara `<section class="center">` dan `</section>`.
3. Ganti dengan contoh ini (salin untuk tiap proyek):

```html
<section><div class="wrap"><h2>Portofolio</h2><div class="grid">
  <div class="card"><img src="assets/proyek-1.jpg" alt="Nama proyek" style="width:100%;border-radius:12px">
  <h3>Nama proyek</h3><p>Penjelasan singkat hasil kerja.</p></div>
</div></div></section>
```

## 6. Mengganti gambar maskot

Ganti file `assets/maskot-dippo.png` dengan gambar baru bernama sama persis. Disarankan PNG berlatar transparan.

## 7. Cara kerja formulir Kontak

1. Pengunjung mengisi nama, memilih jasa, dan menulis kebutuhan.
2. Setelah menekan "Kirim lewat WhatsApp", browser membuka WhatsApp ke nomor Dippo dengan pesan yang sudah terisi.
3. Pengunjung tinggal menekan kirim di WhatsApp. Tidak ada server atau database.

## 8. Memasang di internet dengan Netlify (menggantikan dippo.netlify.app)

1. Login ke app.netlify.com.
2. Buka situs `dippo` yang sudah ada.
3. Klik tab "Deploys".
4. Di bagian bawah ada kotak untuk drag and drop. Seret folder `dippo-website` (yang sudah diekstrak) ke kotak itu.
5. Tunggu sampai statusnya "Published". Buka dippo.netlify.app untuk melihat hasilnya.

Penting: yang diseret adalah folder yang berisi `index.html` langsung di dalamnya, bukan folder di dalam folder.
Tampilan Netlify bisa berubah. Kalau tombolnya berbeda, cari menu "Deploys" atau "Deploy manually".

## 9. Memasang di hosting sendiri (cPanel)

1. Login ke cPanel, buka "File Manager", lalu masuk ke folder `public_html`.
2. Klik "Upload", pilih file zip, tunggu selesai.
3. Klik kanan file zip, pilih "Extract".
4. Pastikan `index.html` ada langsung di `public_html` (bukan di dalam subfolder). Kalau di dalam subfolder, pindahkan semua isinya ke `public_html`.
5. Buka domainmu di browser.

## 10. Fitur tampilan modern

- Menu mengambang dengan efek kaca, bilah progres warna di paling atas saat di-scroll, dan tombol "Hubungi Kami" yang selalu terlihat.
- Beranda: judul DIPPO dengan gradasi bergerak, maskot melayang dikelilingi kartu kaca, latar warna bergerak pelan, dan efek kedalaman saat kursor digerakkan.
- Teks berjalan besar di bawah bagian atas.
- Etalase layanan gelap dengan tiga kartu. Tiap kartu punya ilustrasi kecil (percakapan chatbot, logo dan palet warna, dokumen yang dikoreksi) yang beranimasi saat muncul di layar.
- Judul bagian muncul kata demi kata, dan kartu muncul perlahan saat di-scroll.
- Tombol WhatsApp bulat mengambang di pojok kanan bawah semua halaman. Saat kursor diarahkan, muncul tulisan "Konsultasikan dulu yuk".
- Tombol ajakan (CTA) ada di menu, hero, tiap kartu layanan, halaman layanan (atas dan bawah), dan bagian penutup besar.
- Efek zoom dan scale: maskot, kartu melayang, tombol, chip menu, logo, kartu, langkah, FAQ, dan teks berjalan membesar halus saat kursor diarahkan. Teks berjalan berhenti saat disentuh kursor.
- Kartu layanan miring 3D mengikuti kursor, ilustrasi di dalamnya ikut zoom, dan tepinya bercahaya berputar.
- Tombol "tertarik" mengikuti kursor (efek magnet), dan maskot di hero mengecil halus saat halaman di-scroll.
- Bagian penutup membesar masuk (zoom-in) saat muncul di layar.
- Jika pengunjung mengaktifkan pengaturan "kurangi gerakan" di perangkatnya, semua animasi otomatis dimatikan.

Cara mengubah teks percakapan chatbot atau daftar koreksi dokumen: buka `index.html`, cari `class="mock"`, lalu ubah tulisan di dalamnya.
Cara mengubah teks berjalan: cari `class="marq"` di `index.html`, lalu ubah isi `<span>` satu per satu. Jumlah `<span>` harus genap (misalnya 8).

## Masalah yang sering muncul

| Masalah | Penyebab | Solusi |
|---|---|---|
| Menu atas, tombol WhatsApp, atau footer tidak muncul | File `js/shared.js` atau `js/main.js` tidak ketemu | Pastikan folder `js` ada di samping file HTML |
| Tampilan polos tanpa warna | Folder `css` tidak ikut | Pastikan folder `css` ada dan berisi `style.css` |
| Gambar maskot tidak muncul | Nama atau lokasi file beda | Pastikan `assets/maskot-dippo.png` ada |
| WhatsApp tidak terisi nomor yang benar | Nomor di `main.js` salah format | Tulis tanpa + dan spasi, mulai 62 |
| Konten tidak muncul / halaman kosong saat di-scroll | JavaScript gagal dimuat | Pastikan `js/main.js` ada, lalu tekan Ctrl+F5 |
| Perubahan tidak terlihat | Browser menyimpan versi lama | Tekan Ctrl+F5 |
| Halaman 404 di Netlify | `index.html` ada di dalam subfolder | Seret folder yang berisi `index.html` langsung |

## 11. Identitas visual dan hero baru

- Warna utama: Deep Navy `#17172B`, Warm White `#F7F6F2`, Electric Purple `#7657E8`. Aksen kuning `#FFC83D` untuk Creative dan teal `#2DD4BF` untuk Edu.
- Warna Beranda diatur di baris pertama `css/style.css` (`:root`). Warna halaman layanan ada di tiga baris teratas `css/layanan.css`.
- Hero Beranda ada di `index.html` (`<section class="hero">`) dan gayanya di bagian bawah `css/style.css` ("Hero baru").
- Headline: ubah teks di `<h1>`. Baris "Your Ideas." bergaya garis luar, dua baris lainnya solid.
- Tiga kartu melayang (`.f1` AI, `.f2` Creative, `.f3` Edu) diubah isinya langsung di HTML. Posisinya diatur di CSS pada `.hero .f1`, `.f2`, `.f3`.
- Maskot tetap `assets/maskot-dippo.png`.

## 12. Etalase layanan di Beranda

- Ada di `index.html`, bagian `<section class="show" id="layanan">`. Tiap layanan satu panel: `.svc.ai`, `.svc.cr`, `.svc.ed`.
- Teks, deskripsi, dan tombol ada di `<div class="tx">`. Link tombol tidak berubah (`kontak.html?jasa=...` dan `dippo-*.html`).
- Visual mockup ada di `<div class="stage">`. Angka di kartu "Ringkasan hari ini" hanya contoh tampilan.
- Gaya ada di bagian bawah `css/style.css` ("Etalase layanan"). Animasi tampil otomatis saat panel terlihat, dan elemen bergeser halus mengikuti kursor.

## 13. Portofolio & Demo (portofolio.html)

- File: `portofolio.html`, `css/portofolio.css`, `js/portofolio.js`.
- **Tidak ada proyek klien asli yang dipublikasikan.** Semua contoh adalah *Concept Project*, *Sample*, atau *Interactive Demo* dengan data fiktif; labelnya ada di pojok tiap kartu (`.pf-lbl`). Jangan ubah label ini menjadi klaim klien, testimoni, atau angka hasil kecuali memang ada datanya.
- **Interactive Demo** (3 tab): chatbot WhatsApp toko online (jawaban terskrip, tidak memakai AI sungguhan), Brand preview (nama, warna, gaya huruf), Cek dokumen (proofreading & formatting). Teks dan data contoh ada di `js/portofolio.js` (mis. harga contoh `189000`) dan di HTML tiap panel `#dm-ai`, `#dm-cr`, `#dm-ed`.
- **Filter**: tombol `data-f="all|ai|cr|ed"`; tiap proyek `article.pf-tile` punya `data-cat` dan `data-span` (lebar kolom di grid 12 kolom). Tambah proyek dengan menyalin satu `article` dan memperbarui angka di tombol filter.
- Proyek asli: ganti `.pf-vis` (mockup) dengan gambar hasil kerja, lalu ubah label menjadi nama klien hanya bila sudah ada izin.
- Tombol "Minta solusi serupa" mengarah ke `kontak.html?jasa=...` (formulir yang sudah ada).

## 14. Sistem tipografi & spacing (css/system.css)

Satu file, dimuat **paling akhir** di semua halaman. Semua ukuran font, jarak antar-section, lebar container, dan gutter diatur lewat variabel di `:root` bagian atas file.

- **Font (2 keluarga):** Bricolage Grotesque untuk judul, Plus Jakarta Sans untuk teks.
- **Skala tipografi (fluid, memakai `clamp()`):** `--fs-display` (hero Beranda), `--fs-h1` (judul halaman), `--fs-h2` (judul section), `--fs-h3-lg`, `--fs-h3`, `--fs-h4` (judul card), `--fs-lead`, `--fs-body`, `--fs-sm`, `--fs-xs`, `--fs-2xs`, `--fs-num` (angka harga). Line-height, letter-spacing, dan weight: `--lh-*`, `--ls-*`, `--fw-*`.
- **Skala spacing (kelipatan 4px):** `--s-1` … `--s-9`; jarak antar-section `--sec` (dan `--sec-sm` untuk hero halaman), gutter `--gut`, padding card `--card-pad`, jarak grid `--gap`.
- **Container:** `--container` (1200px) dipakai semua `.wrap`, navbar, dan kotak CTA, sehingga tepi konten sama di semua section. Lebar teks dibatasi `--measure` dan `--measure-lead`.
- Mockup (isi kartu showcase, demo, dan contoh proyek) memakai ukuran font sendiri yang skalanya ikut ukuran mockup, jadi tidak diubah oleh sistem ini.
- Ingin mengubah tampilan? Ubah angka di `:root` dulu. Jangan menambah `font-size` atau `padding` baru di file lain kalau token yang ada sudah cukup.

## 15. Motion & micro-interaction (css/motion.css, js/motion.js)

Tanpa library animasi: hanya CSS (transform/opacity), Intersection Observer, dan Web Animations API. Easing dan durasi diatur lewat variabel di `:root` bagian atas `css/motion.css` (`--ease`, `--ease-pop`, `--dur-1` … `--dur-4`).

- **Hero:** teks Beranda dan Portofolio sudah punya entrance berurutan (`.up`); kartu melayang menyusul. Hero halaman layanan: tag, judul, deskripsi, tombol, lalu maskot dan kartu muncul bertahap. Semua selesai di bawah 1,5 detik dan tidak menahan bacaan.
- **Scroll:** kartu dan judul memakai `.rv` (fade-up). Portofolio, kotak demo, promo, dan blok Industri memakai `.mo-rv` yang ditambahkan `js/motion.js`.
- **Hover & tombol:** tombol membesar tipis saat hover, mengecil saat ditekan, panah di dalam tombol bergeser; menu, tautan footer, tab, dan filter punya umpan balik hover dan tekan; logo di navbar sedikit miring saat hover; teks berjalan berhenti saat kursor di atasnya.
- **FAQ:** buka-tutup dianimasikan (tinggi dan ikon plus yang berputar). Tanpa JavaScript, FAQ tetap bisa dibuka seperti biasa.
- **Filter portofolio:** kartu yang tampil muncul bergantian setiap filter diganti.
- **Maskot:** klik maskot di hero untuk melihat ia menyapa ("Halo!"). Hero halaman layanan punya parallax ringan mengikuti kursor (hanya perangkat dengan kursor halus).
- **prefers-reduced-motion:** semua animasi, hover bergerak, dan efek JS dimatikan; konten langsung tampil dan semua fungsi tetap berjalan.
- Menambah reveal pada elemen baru: tambahkan selektornya ke daftar `groups` di `js/motion.js` (bagian 3).
