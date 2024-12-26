const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./userRoutes"); // Import router

const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Menggunakan router
app.use("/users", userRoutes);

// Rute utama
app.get("/", (req, res) => {
    res.send("Selamat datang di API Pengguna!");
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
