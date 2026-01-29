\# 🚀 SecureGate IoT: Real-time Attendance System



!\[GitHub stars](https://img.shields.io/github/stars/Radiant213/SecureGate?style=for-the-badge)

!\[Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge\&logo=nextdotjs\&logoColor=white)

!\[Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge\&logo=node.js\&logoColor=white)

!\[ESP32](https://img.shields.io/badge/ESP32-E7352C?style=for-the-badge\&logo=espressif\&logoColor=white)



\*\*SecureGate\*\* adalah sistem absensi berbasis IoT yang mengintegrasikan hardware ESP32 dengan dashboard monitoring modern secara \*real-time\*. Project ini dikembangkan untuk mempermudah manajemen absensi siswa melalui jalur internet publik yang aman.



---



\## 📸 Preview System



| Web Dashboard (Prototype) | Hardware Setup |

|---|---|

| !\[Dashboard](assets/dashboard.jpg) | !\[Hardware](assets/hardware.jpg) |



> \*\*Note:\*\* Dashboard menggunakan desain Glassmorphism untuk tampilan yang lebih premium dan informatif bagi admin.



---



\## ✨ Fitur Unggulan

\- \*\*Real-time Monitoring:\*\* Update data tanpa refresh halaman menggunakan \*\*Socket.io\*\*.

\- \*\*Remote Connection:\*\* ESP32 tetap bisa mengirim data meski berada di jaringan yang berbeda (sekolah/rumah) via \*\*Cloudflare Tunnel\*\*.

\- \*\*Persistent Data:\*\* Log absensi otomatis tersimpan di database \*\*MySQL\*\*.

\- \*\*Smart Trigger:\*\* Sistem pengiriman data yang efisien melalui integrasi API Node.js.



\## 🛠️ Tech Stack

\- \*\*Hardware:\*\* ESP32 DevKit V1 (C++ / Arduino IDE)

\- \*\*Backend:\*\* Node.js \& Express.js

\- \*\*Database:\*\* MySQL

\- \*\*Frontend:\*\* Next.js 15, Tailwind CSS, Framer Motion

\- \*\*Tunneling:\*\* Cloudflare Zero Trust (Public Access: `absen.radiantcode.web.id`)



\## 📐 Alur Kerja

1\. \*\*Trigger:\*\* Data dikirim oleh ESP32 saat terjadi aktivitas (Simulasi tombol BOOT).

2\. \*\*Tunneling:\*\* Data melewati \*\*Cloudflare Tunnel\*\* menuju server lokal rumah.

3\. \*\*Storage:\*\* Node.js menyimpan data ke MySQL.

4\. \*\*Broadcast:\*\* Server memancarkan data secara real-time ke semua dashboard aktif.



---



\## 👨‍💻 Developer

\*\*Radiant213\*\*

\* 16 y.o, Grade 11 Student at SMK (Jurusan PPLG)

\* Enthusiast in Software Development \& IoT.

\* Personal Site: \[radiantcode.web.id](https://radiantcode.web.id)



---

\*Project ini adalah bagian dari eksplorasi teknologi PPLG untuk menciptakan sistem keamanan dan absensi yang lebih baik.\*

