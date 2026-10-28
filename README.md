# Website Dippo: Panduan Pemasangan Langkah demi Langkah

Panduan ini ditulis untuk pemula. Ikuti urutannya dari atas ke bawah, dan jangan loncat langkah.
Nama menu di hosting atau situs lain bisa sedikit berbeda dari yang ditulis di sini, tapi
fungsinya sama.

---

## 1. Isi Folder Ini

```
dippo-website/
├── index.html              ← seluruh halaman website (beranda + Tentang Kami)
├── README.md               ← panduan ini
└── assets/
    ├── maskot-dippo.png    ← gambar maskot besar
    ├── logo-dippo.png      ← maskot kecil untuk logo di pojok kiri atas
    └── favicon.png         ← ikon kecil di tab browser
```

**Aturan penting:** `index.html` dan folder `assets` harus selalu berada **berdampingan**
(satu tingkat). Jangan mengubah nama file atau nama folder, karena `index.html` memanggil
gambar lewat nama itu.

---

## 2. Coba Dulu di Komputer Sendiri (Sebelum Upload)

1. Ekstrak file ZIP (klik kanan, lalu **Extract All** / **Ekstrak**). Jangan buka file langsung dari dalam ZIP.
2. Buka folder `dippo-website`.
3. Klik dua kali `index.html`. Website akan terbuka di browser (Chrome, Edge, dsb).
4. Pastikan komputer terhubung internet saat mencoba, karena jenis huruf (font) diambil dari Google Fonts.
5. Cek: maskot muncul, menu "Tentang Kami" bisa diklik, dan gelembung WhatsApp ada di pojok kanan bawah.

Kalau semua terlihat benar, lanjut ke langkah 3.

---

## 3. Memasang Website ke Internet

Pilih **salah satu** cara di bawah.

### Cara A: Hosting biasa dengan cPanel (paling umum di Indonesia)

Cocok kalau kamu sudah membeli paket hosting.

1. Login ke akun hosting, lalu buka **cPanel**.
   (Alamat dan password biasanya dikirim lewat email saat kamu membeli hosting.)
2. Cari dan klik **File Manager**.
3. Buka folder **`public_html`**. Ini adalah folder tempat website tampil di domainmu.
4. Kalau di dalamnya sudah ada file bawaan (misalnya `index.php`, `default.html`, atau folder `cgi-bin`), **hapus file bawaan itu** kecuali folder `cgi-bin`.
5. Klik **Upload** di bagian atas.
6. Upload **file ZIP** website ini. Tunggu sampai bilah proses penuh (100%).
7. Kembali ke File Manager, klik kanan file ZIP tadi, lalu pilih **Extract**.
8. Hasil ekstrak biasanya berupa folder `dippo-website`. Buka folder itu, pilih **semua isinya** (`index.html` dan `assets`), lalu **Move** (pindahkan) ke `public_html` langsung.
   - Tujuannya: `index.html` harus berada di `public_html/index.html`, **bukan** di `public_html/dippo-website/index.html`.
9. Hapus folder `dippo-website` yang sudah kosong dan file ZIP-nya.
10. Buka domainmu di browser. Website Dippo seharusnya sudah tampil.

### Cara B: Gratis lewat Netlify (tanpa hosting berbayar)

Cocok kalau ingin mulai tanpa biaya hosting. Kamu tetap bisa memakai domain milik Dippo.

1. Buat akun di **netlify.com** (bisa daftar dengan email atau akun Google).
2. Setelah login, cari opsi untuk **menambah situs baru secara manual** (biasanya bernama *Add new site* → *Deploy manually*, atau halaman *Netlify Drop*).
3. **Tarik (drag) folder `dippo-website`** (folder hasil ekstrak, bukan ZIP-nya) ke kotak yang tersedia.
4. Tunggu beberapa detik. Netlify akan memberi alamat sementara seperti `nama-acak.netlify.app`.
5. Buka alamat itu untuk memastikan website tampil benar.

Alternatif gratis lain dengan cara serupa: **Cloudflare Pages** (pilih *Direct Upload*) atau **GitHub Pages**.

---

## 4. Menghubungkan Domain Milik Dippo

"Domain" adalah alamat website, misalnya `namadomain.com` atau `namadomain.id`.

### Kalau domain dan hosting dibeli di tempat yang sama
Biasanya domain sudah otomatis terhubung ke `public_html`. Tidak ada yang perlu diatur,
cukup tunggu beberapa menit sampai satu jam lalu buka domainnya.

### Kalau domain dibeli di tempat berbeda dari hosting
Kamu perlu mengarahkan domain ke hosting. Ada dua cara, pilih **satu**:

**Cara 1: Ganti Nameserver (paling mudah)**
1. Di akun hosting, cari informasi **nameserver**. Biasanya dua alamat seperti `ns1.namahosting.com` dan `ns2.namahosting.com`. Bisa dilihat di email selamat datang dari hosting.
2. Login ke tempat kamu membeli domain, buka pengaturan domain, lalu cari **Nameserver** (atau *DNS Management*).
3. Ganti nameserver lama dengan dua nameserver dari hosting, lalu simpan.

**Cara 2: Atur DNS record**
1. Di pengaturan DNS domain, buat record **A** dengan nama `@` yang nilainya adalah **alamat IP hosting** (alamat IP ini tertera di cPanel atau email dari hosting).
2. Buat record **CNAME** dengan nama `www` yang menunjuk ke domain utamamu.

**Untuk Netlify:** buka situsmu di Netlify, cari menu **Domain management** (atau *Add custom domain*), lalu masukkan domainmu. Netlify akan menampilkan record DNS yang harus diisi di tempat kamu membeli domain. Salin persis seperti yang ditampilkan.

> **Perlu sabar:** perubahan domain bisa memakan waktu beberapa menit sampai maksimal 24 sampai 48 jam
> untuk berlaku di seluruh internet. Ini normal dan bukan tanda ada yang salah.

---

## 5. Mengaktifkan HTTPS (Gembok Aman)

Website yang aman diawali dengan `https://` dan ada ikon gembok di browser.

- **cPanel:** cari menu **SSL/TLS Status** atau **AutoSSL** (atau *Let's Encrypt*), lalu aktifkan untuk domainmu.
  Kalau tidak ketemu, tanyakan ke layanan pelanggan hosting: "Tolong aktifkan SSL gratis untuk domain saya."
- **Netlify:** HTTPS biasanya aktif otomatis setelah domain terhubung. Cek di menu **HTTPS** dan klik tombol untuk memicu sertifikat jika belum aktif.

---

## 6. Mengubah Isi Website Sendiri

Gunakan editor teks, misalnya **Notepad++** atau **Visual Studio Code** (keduanya gratis).
Jangan memakai Microsoft Word.

Langkah umum:
1. Klik kanan `index.html`, pilih **Open with**, lalu pilih editor tadi.
2. Tekan **Ctrl + F** dan ketik kata yang ingin dicari (lihat tabel di bawah).
3. Ubah teksnya, simpan dengan **Ctrl + S**, lalu muat ulang di browser dengan **Ctrl + F5**.
4. Upload ulang file `index.html` ke hosting (timpa file lama).

> **Penting:** hanya ubah tulisan di antara tanda `>` dan `<`. Jangan hapus tanda `<`, `>`, atau tanda kutip `"`,
> karena itu bagian kode.

| Yang ingin diubah | Kata yang dicari (Ctrl + F) |
|---|---|
| Email | `halodippo@gmail.com` (ada 2 tempat: tampilan dan tujuan formulir) |
| Nomor WhatsApp (tampilan) | `+62 858-8900-2998` |
| Nomor WhatsApp (tujuan klik, format tanpa `+` dan tanpa `0` di depan) | `6285889002998` (ada 2 tempat) |
| Pesan awal WhatsApp | `Halo%20Dippo` |
| Tulisan gelembung WhatsApp | `Hubungi Dippo ya` |
| Tahun di footer | `© 2026 Dippo` |
| Teks Tentang Kami | `Cerita Singkat Dippo` |
| Pertanyaan FAQ | `Pertanyaan yang Sering Diajukan` |
| Warna biru utama | `--brand:#334EAC` |
| Warna latar putih | `--bg:#fbf7f9` dan `--alt:#f4edf1` |

**Mengganti maskot:** siapkan gambar PNG baru, beri **nama yang sama persis** (`maskot-dippo.png`,
`logo-dippo.png`, `favicon.png`), lalu timpa file lama di folder `assets`.
Disarankan ukuran: maskot 800 x 800 px, logo 128 x 128 px, favicon 192 x 192 px.

---

## 7. Bagian yang Masih Contoh (Wajib Dicek Sebelum Dipublikasikan)

Beberapa teks dibuat sebagai contoh dan **belum tentu sesuai kondisi Dippo**. Sesuaikan atau hapus:

- Label hiasan pada ilustrasi: `Aktif 24/7`, `Stok naik 20%`, `Akurasi tinggi`, `Paling relevan`.
- Cerita, Visi, dan Misi di halaman **Tentang Kami**.
- Jawaban di bagian **FAQ** (soal waktu pengerjaan, UMKM, dan keamanan data).
- Bagian **Sorotan** berisi contoh solusi, bukan proyek klien nyata. Jangan menyebutnya sebagai portofolio nyata kalau belum ada.

---

## 8. Catatan tentang Formulir Kontak

Formulir "Hubungi Kami" **tidak menyimpan data** di server. Saat tombol *Kirim Pesan* ditekan,
aplikasi email pengunjung akan terbuka dengan isi yang sudah terisi, ditujukan ke `halodippo@gmail.com`.
Cara ini sederhana dan tidak butuh pengaturan, tapi hanya berfungsi jika pengunjung punya aplikasi email
di perangkatnya. Tombol WhatsApp dan nomor di halaman tetap bisa jadi jalur kontak utama.

---

## 9. Kalau Ada Masalah

| Gejala | Kemungkinan penyebab dan solusi |
|---|---|
| Muncul tulisan *403 Forbidden* atau *404 Not Found* | `index.html` tidak berada langsung di `public_html`. Pindahkan keluar dari subfolder (langkah 3A nomor 8). |
| Halaman menampilkan file bawaan hosting | File bawaan lama belum dihapus, atau `index.html` belum menimpa. Hapus file bawaan lalu upload ulang. |
| Gambar maskot tidak muncul | Folder `assets` tidak ikut terupload, atau namanya berubah. Pastikan `assets` ada di sebelah `index.html`. Hosting biasanya membedakan huruf besar dan kecil, jadi pakai huruf kecil semua. |
| Perubahan tidak terlihat setelah upload | Browser menyimpan versi lama. Tekan **Ctrl + F5** (atau buka di jendela *Incognito*). |
| Domain belum bisa dibuka | Tunggu sampai 24 sampai 48 jam setelah mengatur domain, lalu cek ulang nameserver atau DNS. |
| Muncul peringatan "Tidak aman" | HTTPS belum aktif. Lihat langkah 5. |
| Huruf terlihat berbeda dari contoh | Komputer tidak terhubung internet saat memuat font Google. Itu normal, website tetap bisa dibaca dengan huruf cadangan. |

---

## 10. Checklist Akhir

- [ ] Website terbuka di domain Dippo dan tampil benar
- [ ] Ada gembok HTTPS
- [ ] Menu "Tentang Kami" dan semua menu lain berfungsi
- [ ] Gelembung WhatsApp membuka chat ke nomor yang benar
- [ ] Email dan nomor di bagian kontak sudah benar
- [ ] Teks contoh (bagian 7) sudah disesuaikan
- [ ] Dicek di HP dan di komputer

Selamat, website Dippo siap dipakai! 🎉
