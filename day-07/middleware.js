// Middleware sederhana

// Import Express
const express = require("express");
const app = express();

// Middleware untuk log request
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Lanjut ke middleware berikutnya atau rute akhir
});

// Middleware autentikasi
const authMiddleware = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(401).send("Unauthorized");
    }
    next();
};

// Rute utama (root)
app.get("/", (req, res) => {
    res.send("Selamat datang di server Express!");
});

// Rute yang dilindungi dengan middleware autentikasi
app.get("/protected", authMiddleware, (req, res) => {
    res.send("Ini adalah halaman yang dilindungi.");
});

// Menjalankan server
app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});