---
title: "Sindikat"
description: "Sistem Informasi Pelatihan, Pendidikan, dan Penelitian Diklat Rumah Sakit terintegrasi untuk manajemen magang, absensi, hingga penerbitan sertifikat."
publishedAt: 2025-11-04
image: "/sindikat-preview.webp"
link: "https://seccure-acces-portal.lovable.app"
tech: ["Laravel", "MySQL", "Laravel Mix", "Bootstrap"]
featured: true
category: ["web"]
---

Sindikat adalah platform Sistem Informasi Diklat yang dirancang untuk mengelola seluruh ekosistem pendidikan, pelatihan, dan penelitian di lingkungan institusi kesehatan/rumah sakit. Platform ini menyatukan proses pengajuan magang, manajemen mitra (MOU), penjadwalan ruang diklat, pelacakan absensi berbasis token, hingga pembuatan surat resmi dan sertifikat otomatis ke dalam satu dashboard terpusat.

## Key Features

- **Manajemen Pengajuan & Alur Kerja Multi-Peran:** Memfasilitasi pendaftaran dan approval tiga kategori peserta secara dinamis (Magang, Pra-Penelitian, dan Pelatihan) lengkap dengan fitur unggah bukti bayar dan modul konsultasi bersama Corporate Instructor (CI).
- **Intent-Based Landing Chatbot:** Menyediakan asisten virtual sederhana pada halaman depan yang mampu menyajikan ringkasan metrik data riil (kuota ruangan, status pengajuan, absensi, dan mitra) kepada pengunjung secara instan.
- **Automated Document & Certificate Generator:** Pembuatan Surat Balasan resmi berformat PDF serta sistem klaim dan unduh sertifikat kelulusan diklat mandiri bagi peserta menggunakan validasi token unik.
- **Resource & Space Management:** Modul pemantauan kapasitas, jadwal penempatan, serta status ketersediaan ruangan diklat secara *real-time* untuk mencegah bentrokan jadwal.
- **Data Interchange & Transparency:** Fitur impor dan ekspor data kemitraan serta rekapitulasi peserta berskala besar menggunakan *spreadsheet*, dilengkapi dengan tautan publik khusus untuk pembaruan data pelatihan.

## Tech Details

- **Core Framework:** Dibangun menggunakan **Laravel 7** (PHP >= 7.2.5) dengan pembatasan hak akses yang ketat memanfaatkan *role-based middleware* kustom untuk memisahkan otoritas Admin, Peserta Magang, dan Peneliti.
- **Frontend & Asset Pipeline:** Antarmuka dashboard dirancang responsif menggunakan **Bootstrap** yang dikompilasi secara efisien melalui **Laravel Mix (NPM)** untuk memastikan performa yang optimal saat diakses di lingkungan internal rumah sakit.
- **Database & Storage:** Menggunakan **MySQL/MariaDB** untuk mengelola relasi data yang kompleks (seperti riwayat absensi, rekapitulasi nilai, dan data instansi mitra).
- **PDF Engine:** Mengintegrasikan library `barryvdh/laravel-dompdf` untuk melakukan *rendering* templat HTML menjadi dokumen Surat Balasan dan Sertifikat siap cetak secara dinamis.