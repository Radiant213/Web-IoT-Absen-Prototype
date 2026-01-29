# 🚀 SecureGate IoT: Real-time Attendance System

![GitHub stars](https://img.shields.io/github/stars/Radiant213/SecureGate?style=for-the-badge)
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=for-the-badge&logo=espressif&logoColor=white)

**SecureGate** adalah sistem absensi berbasis IoT yang mengintegrasikan hardware ESP32 dengan dashboard monitoring modern secara *real-time*. Project ini dikembangkan untuk mempermudah manajemen absensi siswa melalui jalur internet publik yang aman secara terpusat.

---

## 📸 Preview System

| Web Dashboard (Modern UI) | Hardware Setup |
| :---: | :---: |
| ![Dashboard](assets/dashboard.jpg) | ![Hardware](assets/hardware.jpg) |

> **Note:** Dashboard menggunakan desain **Glassmorphism** untuk tampilan yang lebih premium, responsif, dan informatif bagi admin.

---

## ✨ Fitur Unggulan

- **Real-time Monitoring:** Update data instan tanpa refresh halaman menggunakan **Socket.io**.
- **Unified Architecture:** Backend (Node.js) & Frontend (Next.js) berjalan dalam satu server yang sama.
- **Remote Connection:** ESP32 tetap bisa mengirim data meski berada di jaringan yang berbeda (sekolah/rumah) via **Cloudflare Tunnel**.
- **Persistent Data:** Log absensi otomatis tersimpan di database **MySQL** dan langsung muncul saat halaman dibuka.
- **Cyber Aesthetic:** UI gelap dengan tema futuristik menggunakan Tailwind CSS v4 & Framer Motion.

## 🛠️ Tech Stack

- **Hardware:** ESP32 DevKit V1 (C++ / Arduino IDE)
- **Backend:** Node.js & Express.js (Unified Custom Server)
- **Database:** MySQL
- **Frontend:** Next.js 15, Tailwind CSS v4, Framer Motion, Lucide Icons
- **Tunneling:** Cloudflare Zero Trust (Public Access: `absen.radiantcode.web.id`)

## 📐 Alur Kerja

1. **Trigger:** ESP32 mendeteksi aktivitas (misal: scan kartu atau tekan tombol) dan mengirim data JSON via HTTP POST.
2. **Tunneling:** Data dikirim melalui jalur internet publik yang diamankan oleh **Cloudflare Tunnel**.
3. **Storage:** Server (Node.js) menerima data, menyimpannya ke MySQL, dan memvalidasi log.
4. **Broadcast:** Melalui Socket.io, server langsung mendorong data ke dashboard yang sedang terbuka secara real-time.

## 🚀 Cara Menjalankan

### 1. Prasyarat
- Node.js installed
- MySQL Database `iot_db` dengan tabel `absensi`
- ESP32 Hardware

### 2. Instalasi & Running
```bash
# Masuk ke folder dashboard
cd dashboard-absen

# Install dependencies
npm install

# Jalankan build (untuk performa maksimal)
npm run build

# Start server
npm start
```

## 👨‍💻 Developer

**Radiant213**
* 16 y.o, Grade 11 Student at SMK (Jurusan PPLG)
* Enthusiast in Software Development & IoT.
* Personal Site: [radiantcode.web.id](https://radiantcode.web.id)

---

*Project ini adalah bagian dari eksplorasi teknologi PPLG untuk menciptakan sistem keamanan dan absensi yang lebih efisien dan modern.*
