# OmahFE Landing Page

Slicing desain landing page **OmahFE** dari Figma menjadi website statis menggunakan **HTML, CSS, dan JavaScript (vanilla)**, tanpa framework atau library UI apa pun.

> Desain acuan: frame **Landing Page OmahTI** (1440 × 4892 px) pada file Figma penugasan Frontend.

## 1. Identitas Diri

| | |
|---|---|
| **Nama** | `Samuel Lukas Pratama` |
| **NIM** | `26/577896/PA/24200` |

## 2. Fitur Opsional yang Dikerjakan

Selain mengimplementasikan seluruh halaman (navbar hingga footer) sesuai Figma, fitur tambahan berikut dikerjakan:

**Responsif**
- [x] Tampilan sesuai Figma pada 1440 px, dan menyesuaikan layar lain (lihat bagian Responsif).
- [x] Navbar menjadi menu hamburger pada layar kecil.

**Interaksi JavaScript**
- [x] Navbar `position: sticky`, bayangan muncul saat di-scroll, dan menu yang sedang dilihat ditandai (scroll-spy).
- [x] Show More / Show Less pada portofolio (4 kartu menjadi 7 kartu).
- [x] Popup detail saat kartu portofolio diklik (tutup dengan tombol ×, klik di luar, atau Esc).
- [x] Slider testimonial: tombol panah, titik indikator, autoplay, dan swipe/drag.
- [x] FAQ accordion (satu item terbuka pada satu waktu).
- [x] Validasi form kontak dan penghitung karakter pada kolom pesan (maksimal 300).
- [x] Popup Sign In / Sign Up dengan validasi sederhana (simulasi tampilan, tanpa server).
- [x] Angka statistik menghitung naik saat terlihat, dan bagian halaman muncul perlahan saat di-scroll.
- [x] Tombol kembali ke atas.

**Lainnya**
- [x] Atribut aksesibilitas dasar (`aria-label`, navigasi keyboard pada kartu dan FAQ, `prefers-reduced-motion`).
- [x] Gambar yang tidak ditemukan dilewati otomatis sehingga tampilan tetap rapi.

## 3. Penggunaan AI

AI digunakan sebagai **alat bantu**, bukan pengganti proses pengerjaan. Rinciannya:

- **Claude (Anthropic)** membantu menulis draf kode HTML, CSS, dan JavaScript, menelusuri error, serta menjelaskan konsep JavaScript yang saya pelajari.
- **Saya sendiri** menulis kode HTML, CSS, dan JavaScript, menyiapkan dan mengambil data dari Figma (ukuran, warna, font, logo, dan ikon) lalu menambahkanya ke code, mencocokkan hasil dengan desain, menguji di browser, melaporkan bagian yang belum sesuai, dan memutuskan fitur yang dipakai.
- Kode yang dihasilkan saya jalankan, uji, dan sesuaikan sebelum dikumpulkan.

## Tech Stack

| Aspek | Keterangan |
|---|---|
| Struktur | HTML5 semantik |
| Gaya | CSS3 murni (Flexbox, Grid, `clamp()`, custom properties) |
| Interaksi | JavaScript vanilla |
| Font | Inter dan Mystery Quest (Google Fonts), Scotch Text Compressed (file lokal) |

## Struktur Folder


```text
├── index.html
├── style.css
├── script.js
├── README.md
├── fonts/
│   └── ScotchTextComp-Bd (3).ttf
└── images/
    ├── CHELSEA.jpeg
    ├── GAUZA.jpeg
    ├── coder.jpeg
    ├── kak jano.jpeg
    ├── logo.png
    ├── masukFE.jpg
    ├── nvidia.png
    ├── pionir.png
    ├── porsenigama.png
    ├── prabowo.jpeg
    ├── prabowo2.png
    └── sosmed.svg
```

## Cara Menjalankan

1. Buka folder proyek di **VS Code**.
2. Pasang ekstensi **Live Server**.
3. Klik kanan `index.html`, lalu pilih **Open with Live Server**.

Koneksi internet diperlukan untuk memuat font Inter dan Mystery Quest dari Google Fonts.

## Bagian Halaman

1. **Navbar**: menu About, Portfolio, Testimonial, FAQ, Contact, serta tombol Sign In dan Sign Up.
2. **Hero**: judul, deskripsi, logo FE, dan ikon sosial media.
3. **Tentang Kami**: deskripsi, statistik, dan tombol Selanjutnya.
4. **Portfolio**: grid kartu dengan tombol Show More / Show Less.
5. **Testimonial**: slider kartu.
6. **FAQ**: accordion.
7. **Contact**: form kontak.
8. **Footer**: alamat, tautan halaman, dan ikon sosial media.

## Penyesuaian dengan Figma

- Ukuran, jarak, warna, dan tipografi mengikuti data CSS dari Figma pada lebar **1440 px**.
- Palet warna utama: `#84ADCE`, `#C2D6E6`, `#F4F1EF`, `#FED5CE`, `#FEAA9D`, `#234158`, `#FB3719`.
- Teks disesuaikan dengan desain, termasuk penulisan "Portofolio" pada judul bagian portofolio.
- Gambar yang kosong di Figma diisi dengan ilustrasi abstrak bebas (tanpa unsur SARA).

## Responsif

| Lebar layar | Perilaku |
|---|---|
| Lebih dari 1440 px | Konten tetap selebar 1440 px di tengah, latar mengisi seluruh lebar |
| 1001 – 1439 px | Ukuran mengecil proporsional (`clamp()` dan `minmax()`) |
| Maksimal 1000 px | Hero menumpuk, navbar menjadi hamburger, grid dua kolom, form satu kolom |
| Maksimal 560 px | Portofolio dan testimonial satu kolom |

## Mengganti Gambar

Daftar gambar berada di bagian paling atas `script.js`:

```javascript
onst projectImages = [
  "images/pionir.png", "images/porsenigama.png", "images/coder.jpeg", "images/coder.jpeg",
  "images/porsenigama.png", "images/pionir.png", "images/coder.jpeg"
];
const testiImages = [
  "images/kak jano.jpeg", "images/GAUZA.jpeg", "images/CHELSEA.jpeg",
  "images/prabowo2.png", "images/nvidia.png", "images/masukFE.jpg"
];
```

Letakkan gambar baru di folder `images`, lalu sesuaikan nama file pada daftar tersebut.

## Catatan

- Tidak ada framework atau library UI (React, Vue, Tailwind, Bootstrap, dan sejenisnya).
- Sign In / Sign Up hanya simulasi tampilan dan tidak menyimpan data pengguna.
- Link ikon sosial media masih berupa `#` dan perlu diganti dengan alamat akun yang sebenarnya.
- Logo OmahFE pada footer masih dibuat dengan teks dan CSS karena belum menggunakan aset gambar asli.# Samuel-Lukas-P.--frontend---omahTi
