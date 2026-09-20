# BeByte — Aplikasi Web Kasir (Simple POS)

BeByte adalah aplikasi kasir berbasis web untuk usaha F&B. Dibangun dengan **HTML**, **CSS**, dan **Vanilla JavaScript** — ringan, tanpa backend, data tersimpan di `localStorage` browser.

## ✨ Fitur Utama

* Katalog menu dengan gambar, varian, dan mode stok (tandai HABIS/ADA).
* Keranjang + modal jumlah, edit/hapus item.
* Nama pemesan (wajib) + catatan dapur dengan shortcut toggle (centang).
* Tombol **SAVE** — simpan order sebagai hold **UNPAID**, bayar belakangan.
* Kotak **UNPAID** — daftar hold per nomor antrian, klik untuk buka kembali di MY ORDER.
* **CHECKOUT** — pembayaran CASH (numpad tablet + hitung kembalian) atau QRIS dinamis.
* **QRIS dinamis** — QR statis di `QRIS_STATIC` diubah otomatis mengikuti total (tanpa API perusahaan, murni konversi EMVCo + CRC16 di `js/qris.js`); tampil di modal checkout dan ikut tercetak di resi QRIS.
* Dashboard admin: laporan transaksi, pagination, badge TUNAI/QRIS/UNPAID.
* Tombol **PANGGIL** (notif Discord pesanan siap), **BAYAR** (lunasi hold), **FINISH** (tandai selesai ✅).
* Print resi thermal **58mm** per transaksi + cetak laporan.
* Backup/restore database via JSON.
* Notifikasi Discord (order masuk, dine-in, pesanan selesai).
* Identitas toko terpusat di `js/data.js` (nama, event, tagline, versi, maskot).
* **PWA** — bisa di-install ke HP/tablet/PC (fullscreen kayak aplikasi) + tetap jalan saat offline via `sw.js`.
* **6 tema warna** — BeByte, Merah Putih 🇮🇩, Mint 🌿, Cappuccino ☕, Ocean 🌊, Blue Matrix 💠. Ganti lewat tombol 🎨 Tema, tersimpan per perangkat. Palet diatur di `:root[data-theme]` (`css/style.css`), warna danger (UNPAID) ikut tema.
* **Nama Server** — tombol 🧑 di samping tema buat isi nama kasir/pramusaji per perangkat. Muncul di pesan Discord (`🙋 Server`, plus salam manis di notif selesai), di resi (`Serv:`), dan jadi kolom tanda tangan di laporan cetak.

## 📂 Struktur Proyek

```text
/
├─ assets/
│  ├─ bebyte-logo.png
│  ├─ bebyte-mascot.png
│  ├─ icon-192.png / icon-512.png / icon-180.png (PWA)
│  ├─ sup.jpg / nasi.jpg / ayam.jpg / ikan.jpg
│  ├─ mie.jpg / snacks.jpg / gorengan.jpg
│  └─ teh.jpg / kopi.jpg / es.jpg / jus.jpg / sup-buah.jpg / bandrek.jpg
├─ css/
│  └─ style.css
├─ js/
│  ├─ app.js      # logika kasir, keranjang, pembayaran, resi
│  ├─ data.js     # CONFIG + daftar menu
│  ├─ discord.js  # kirim notif ke Discord webhook
│  ├─ qris.js     # statis → dinamis (EMVCo + CRC16)
│  └─ report.js   # simpan/hitung laporan (localStorage)
├─ manifest.json  # identitas PWA (nama, ikon, tema)
├─ sw.js          # service worker (install + offline)
└─ index.html
```

## 🚀 Cara Menjalankan

Karena memakai ES module, jalankan lewat server lokal (jangan double-click `index.html`):

```bash
# di folder proyek
python3 -m http.server 8888
# lalu buka http://localhost:8888
```

Alternatif: aplikasi [Simple Web Server](https://simplewebserver.org/) atau extension **Live Server** (auto-refresh saat pengembangan).

## 📲 Install sebagai Aplikasi (PWA)

Buka URL hosting-nya (misal GitHub Pages, wajib **https**) di Chrome/Edge, lalu:

* PC: klik ikon **Install** di address bar.
* HP/tablet: titik 3 → **Install app** / **Add to Home screen**.

Aplikasi jalan fullscreen tanpa address bar. Strategi cache `network-first`: selama online selalu versi terbaru, saat offline pakai versi terakhir yang tersimpan. Setiap rilis naikkan `CACHE_NAME` di `sw.js` (`bebyte-v1` → `v2`, dst).

## 🔄 Alur Kasir

1. Pilih menu → isi **nama pemesan** + catatan (opsional).
2. **SAVE** kalau pelanggan bayar belakangan → masuk kotak UNPAID + dapur dapat notif Discord.
3. Klik kotak `#antrian` di UNPAID untuk membuka kembali → **CHECKOUT** (CASH/QRIS).
4. **PANGGIL** saat pesanan siap → pelanggan dapat notif Discord.
5. **FINISH** saat pesanan diserahkan → tombol hilang, tinggal centang ✅.

## 🛠️ Ubah Menu & Identitas

Edit `js/data.js`:

```js
export const CONFIG = {
  STORE_NAME: 'BeByte',
  EVENT_NAME: 'Technopreneurship 5.0',
  TAG_LINE: 'Semangat Baru',
  VERSION: '2026',
  MASCOT: 'assets/bebyte-mascot.png',
  LOGO: 'assets/bebyte-logo.png',
  RECEIPT_LOGO: false, // true = logo tampil di resi (khusus printer yg dukung cetak gambar)
  RECEIPT_FOOTER: 'Terima Kasih',
  QRIS_STATIC: '00020101...6304XXXX', // QRIS statis merchant (hasil scan, bukan ketikan)
  WEBHOOK_URL: 'https://discordapp.com/api/webhooks/...',
  ROLE_ID_DAPUR: '...'
};
```

> Cara isi `QRIS_STATIC`: scan QRIS merchant pakai pemindai QR yang menampilkan teks mentah, lalu paste utuh — jangan ketik manual (salah 1 digit = dana nyasar). Nominal & CRC dihitung ulang otomatis oleh `js/qris.js` setiap transaksi.

Contoh menu dengan varian:

```js
{
  id: 1,
  name: 'Lumpia Ubi Lumer',
  price: 15000,
  category: 'Food',
  img: './assets/ubiunguahh.jpg',
  active: true,
  variants: [
    { name: 'Coklat', nickname: 'CHUBI 🍫', desc: 'Isi coklat lumer', active: true },
    { name: 'Keju', nickname: 'CHEUBI 🧀', desc: 'Isi keju gurih', active: true }
  ]
}
```

> Catatan: `WEBHOOK_URL` adalah kredensial privat — jangan commit URL asli ke repo publik, pakai URL webhook milik sendiri.

## 📈 Pengembangan Selanjutnya

* Simpan data ke IndexedDB atau database server.
* Fitur login kasir & owner.
* Mode offline penuh (PWA). ✅ done via `sw.js` (cache network-first)
