---
title: "NugasReceh"
description: "Platform micro-earning berbasis Laravel 12 dan Android Java yang memungkinkan pengguna menghasilkan uang dengan menyelesaikan tugas media sosial."
publishedAt: 2025-08-15
image: "/nugasreceh-preview.webp"
link: "https://nugasreceh.com"
tech: ["Laravel", "Android Java", "Tailwind CSS", "MySQL", "Vite"]
featured: true
category: ["web", "optimization"]
---

NugasReceh adalah platform *micro-earning* yang dirancang sebagai wadah bagi pengguna untuk mencari uang saku tambahan ("uang recehan") dengan cara menyelesaikan berbagai macam tugas ringan (*micro-tasks*). Alur pengerjaan di platform ini dibuat sangat praktis; pengguna hanya perlu mendaftarkan username media sosial mereka untuk mulai mengambil tugas yang tersedia. Selain pengerjaan tugas, platform ini juga dilengkapi dengan berbagai fitur hiburan dan gamifikasi menarik seperti *Spin Hoki*, *Dana Kaget*, dan sistem undian berhadiah.

## Key Features

- **Pengerjaan Tugas Multi-Platform:** Menyediakan berbagai macam tugas media sosial terintegrasi yang dapat diselesaikan pengguna hanya dengan memvalidasi username akun sosial mereka.
- **Fitur Gamifikasi (Spin Hoki & Undian):** Modul interaktif *Spin Hoki* berkala dan sistem undian berhadiah menarik untuk meningkatkan retensi dan keterikatan pengguna di dalam aplikasi.
- **Dana Kaget & Redirect System:** Sistem pembagian insentif instan via fitur Dana Kaget yang secara dinamis mengarahkan pengguna ke tautan tujuan yang telah ditentukan.
- **Custom Authentication Session-Based:** Sistem autentikasi kustom berbasis sesi terpisah antara pengguna (`session('user')`) dan admin (`session('admin_id')`) guna fleksibilitas kontrol penuh.
- **Dynamic SMTP & Financial Gates:** Mekanisme rotasi akun SMTP otomatis langsung dari basis data, pengawasan ambang batas penarikan (*withdraw enforcement*) terjadwal (10:00–22:00 WIB), serta pencatatan mutasi saldo yang bersifat idompoten guna mencegah duplikasi data transaksi.

## Applied Security & Optimization Upgrades

Melalui audit keamanan dan performa yang ketat, platform web NugasReceh telah menerapkan standar arsitektur modern:

- **Edge Security & Bot Protection:** Migrasi penuh dari Google reCAPTCHA tradisional ke perlindungan **Cloudflare SSL & Bot Protection** untuk memblokir *request* otomatis (bot) pada klaim tugas.
- **Financial Fraud Prevention:** Penerapan verifikasi tanda tangan HMAC pada *endpoint* webhook pembayaran (`/webhook/pakasir`) untuk menjamin validitas transaksi keuangan dan top-up/penarikan saldo dari pihak ketiga.
- **Mass Assignment & Exploit Mitigation:** Pengamanan struktur model dengan menghapus *sensitive fillables* (seperti `password`, `email_verified`, `otp_hash`, dan `used_at`) serta penanganan *race condition* pada manipulasi saldo spin menggunakan *database locking* (`lockForUpdate()`).
- **CSRF & HTTP Method Hardening:** Mengamankan rute *bulk actions* (seperti *bulk approve/reject* pada riwayat persetujuan tugas) dengan mengubah metode HTTP dari GET menjadi POST/PUT yang dilindungi token CSRF.
- **Asset Optimization:** Pemakaian **Tailwind CSS v4** yang di-compile via Vite untuk memangkas ukuran berkas *style* akhir secara agresif guna mempercepat pemuatan halaman web.

## Tech Details

- **Backend Framework:** **Laravel 12** (PHP ≥8.2) dengan arsitektur *database-backed queue* (`queue:listen`) untuk memproses notifikasi in-app via Model Observers (`Task`, `Withdraw`, `Ticket`) secara *asynchronous*.
- **Database & Storage:** **MySQL** untuk penyimpanan produksi, SQLite (:memory:) untuk *automated testing*, dan **AWS S3** (`flysystem-s3`) untuk penyimpanan berkas dokumen tugas dan ekspor data.
- **Mobile Client:** Aplikasi Android *native* (`nugasreceh-android`) yang dikembangkan menggunakan **Java** guna memastikan efisiensi performa runtime dan integrasi langsung dengan Android SDK.