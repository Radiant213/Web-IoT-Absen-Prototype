const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// Koneksi MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Sesuaikan user mysql lu
    password: '',     // Sesuaikan password mysql lu
    database: 'iot_db'
});

db.connect(err => {
    if (err) console.error('Gagal konek MySQL:', err);
    else console.log('MySQL Konek, Bang!');
});

app.post('/api/absen', (req, res) => {
    const { id, nama } = req.body;

    // 1. Simpen ke MySQL
    const sql = "INSERT INTO absensi (qr_id, nama) VALUES (?, ?)";
    db.query(sql, [id, nama], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        // 2. Emit ke Next.js secara Real-time
        io.emit('absenBaru', {
            id,
            nama,
            waktu: new Date().toLocaleString()
        });

        console.log(`Data ${nama} berhasil disimpan ke MySQL!`);
        res.status(200).json({ status: "success" });
    });
});

app.get('/api/history', (req, res) => {
    const sql = "SELECT * FROM absensi ORDER BY id DESC";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        // Format waktu agar sama dengan format realtime
        const formatted = results.map(row => ({
            id: row.qr_id,
            nama: row.nama,
            waktu: row.waktu // Pastikan kolom di DB ada timestamp/datetime
        }));

        res.json(formatted);
    });
});

server.listen(3000, () => {
    console.log(`Server Real-time & MySQL jalan di port 3000`);
}); 