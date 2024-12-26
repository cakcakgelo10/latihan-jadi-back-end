// Logging Middleware

const express = require("express");
const app = express();

// Middleware global
app.use((req, res, next) => {
    const currentTime = new Date().toISOString(); // Mendapatkan waktu saat ini dalam format ISO
    console.log(`[${currentTime}] ${req.method} ${req.url}`);
    next(); // Melanjutkan ke middleware atau rute berikutnya
});

// Contoh rute
app.get("/", (req, res) => {
    res.send("Halo, ini adalah halaman utama.");
});

app.get("/about", (req, res) => {
    res.send("Ini adalah halaman tentang.");
});

app.post("/submit", (req, res) => {
    res.send("Data berhasil dikirim!");
});

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
