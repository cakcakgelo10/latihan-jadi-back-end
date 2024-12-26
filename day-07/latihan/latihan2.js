// Middleware Autentikasi

const express = require("express");
const { log } = require("node:console");
const app = express();

// Middleware autentikasi
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send("Unauthorized: Header Authorization tidak ditemukan");
    }

    // Jika header ditemukan, lanjut ke rute berikutnya
    next();
};

// Contoh rute tanpa autentikasi
app.get("/", (req, res) => {
    res.send("Halaman utama - tidak memerlukan autentikasi.");
});

// Rute yang dilindungi dengan autentikasi
app.get("/protected", authMiddleware, (req, res) => {
    res.send("Ini adalah halaman yang dilindungi.");
});

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});