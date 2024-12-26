const express = require("express");
const router = express.Router();

// Dummy data pengguna
let users = [
    { id: 1, name: "Reza", email: "Reza@mapan.com" },
    { id: 2, name: "Akbar", email: "Akbar@germo.com" },
    { id: 3, name: "Fakhri", email: "Fakhri@boti.com" },
];

// GET /users - Menampilkan daftar pengguna
router.get("/", (req, res) => {
    res.json(users);
});

// POST /users - Menambahkan pengguna baru
router.post("/", (req, res) => {
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
        return res.status(400).send("Harap isi ID, nama, dan email.");
    }
    users.push({ id, name, email });
    res.status(201).send("Pengguna baru berhasil ditambahkan.");
});

// GET /users/:id - Menampilkan detail pengguna berdasarkan ID
router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).send("Pengguna tidak ditemukan.");
    }
    res.json(user);
});

module.exports = router;
