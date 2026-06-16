---
title: "PulseOS"
description: "Platform monitoring VPS self-hosted yang ringan dan estetis dengan overhead RAM < 300 MB."
publishedAt: 2026-05-25
image: "/pulseos.webp"
link: "https://github.com/AkyasMahira/pulseos"
tech: ["Fastify", "Astro", "React", "TypeScript", "SQLite", "Socket.IO"]
featured: true
category: ["web"]
---

PulseOS adalah *lightweight, self-hosted VPS monitoring dashboard* yang dirancang sebagai alternatif estetis dari *observability stack* yang berat seperti Grafana atau Prometheus. Dikembangkan menggunakan arsitektur monorepo, platform ini menyajikan metrik sistem secara real-time melalui WebSocket dengan penggunaan sumber daya yang sangat minimal.

## Key Features

- **Real-Time Metrics Collection:** Mengumpulkan metrik CPU, RAM, Disk, Jaringan, kontainer Docker, hingga status PM2/systemd setiap 5 detik secara paralel via `/proc` filesystem.
- **Role-Based Access Control (RBAC):** Sistem otorisasi penuh yang memisahkan hak akses secara ketat antara `owner`, `admin`, dan `viewer` (read-only) baik di level API middleware maupun UI.
- **Multi-Server Polling:** Kemampuan memantau beberapa server remote sekaligus dari satu dashboard utama secara aman menggunakan sistem *polling* berbasis *Bearer token*.
- **Alert Engine & Cooldown Engine:** Pengecekan ambang batas (*threshold*) otomatis yang terintegrasi dengan saluran notifikasi Telegram, Discord, dan Webhook kustom yang dilengkapi fitur *cooldown* agar tidak terjadi spam.
- **API Key & Webhook Management:** Dukungan integrasi pihak ketiga menggunakan pengamanan hashing SHA-256 untuk API Keys, serta sistem *event dispatch* untuk Webhooks.

## Tech Details

Platform ini dibangun dengan pembagian modul yang terstruktur:
- **Backend (`apps/api`):** Menggunakan **Fastify** (Node.js ESM) untuk performa routing yang tinggi, **Socket.IO** untuk komunikasi duplex/real-time, serta **SQLite (WAL mode)** sebagai penyimpanan *time-series* yang efisien dan otomatis dipangkas lewat *retention policy*.
- **Frontend (`apps/web`):** Dikembangkan menggunakan **Astro** yang dikombinasikan dengan **React SPA** untuk interaksi dashboard, memanfaatkan **Zustand** untuk *state management* metrik, serta **Recharts** untuk visualisasi grafik *rolling sparklines*.
- **Shared Packages (`packages/types`):** Menyediakan kontrak *interface* TypeScript terpusat yang dipakai bersama oleh frontend dan backend guna menjamin tipe data yang konsisten.