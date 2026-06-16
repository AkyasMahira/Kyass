---
title: "Telegram Dental Assistant"
description: "Bot Telegram asisten klinik gigi untuk mencatatan data pasien, kondisi gigi, dan diagnosis yang terintegrasi dengan Google Sheets."
publishedAt: 2025-01-19
image: "/bot-telegram-gigi-preview.webp"
link: "https://github.com/AkyasMahira/bot-telegram"
tech: ["Node.js", "JavaScript", "Telegram Bot API"]
featured: true
category: ["bot"]
---

Telegram Dental Assistant adalah bot Telegram interaktif yang dirancang untuk membantu tenaga medis atau staf klinik gigi dalam melakukan *screening* awal dan pencatatan medis pasien. Bot ini mempermudah input data klinis secara cepat dan langsung menyimpannya ke dalam ekosistem *cloud storage*.

## Key Features

- **Pencatatan Data & Kondisi Gigi:** Menangani input data spesifik mulai dari identitas pasien hingga keluhan dan kondisi gigi tertentu.
- **Formulasi Diagnosis & Hasil:** Alur interaksi terstruktur untuk memasukkan hasil pemeriksaan, diagnosis, serta tindakan/hasil perawatan.
- **Integrasi Google Sheets:** Semua data yang masuk otomatis disinkronisasikan dan disimpan ke baris Google Sheets secara *real-time* sebagai database yang mudah diakses.
- **Alur Chat Instan:** Antarmuka berbasis teks dan tombol pilihan yang mempercepat proses input tanpa perlu membuka aplikasi manajemen yang berat.

## Tech Details

Bot ini didevelop menggunakan **Node.js** bersama **Telegram Bot API** untuk mengelola *state* percakapan dan validasi input data medis pasien. Integrasi penyimpanan menggunakan Google Sheets API (atau library pendukungnya), memungkinkan penulisan data (*append row*) secara langsung dan aman dari server bot ke *spreadsheet* tujuan.