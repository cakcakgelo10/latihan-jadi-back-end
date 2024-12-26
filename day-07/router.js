// Mengimpor Express
const express = require('express');
const app = express();

// Mengimpor moduleRoutes dari file lain
const moduleRoutes = require('./moduleRoutes');

// Menambahkan middleware untuk logging (optional)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Menggunakan rute dari moduleRoutes
app.use("/module", moduleRoutes);

// Menentukan rute lain atau rute utama
app.get("/", (req, res) => {
    res.send("Selamat datang di server Express!");
});

// Menjalankan server
app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});
