const express = require("express");
const router = express.Router();
// Tambah rute untuk memicu backup:
const { readFile, writeFile, backupFile } = require("../utils/fileHandler");


// Fungsi untuk validasi ID dan email
const validateInput = (id, email) => {
    if (isNaN(id)) {
        return "ID harus berupa angka.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Email tidak valid.";
    }
    return null;
};

// GET /users/backup - Membuat backup file JSON
router.get("/backup", async (req, res) => {
    try {
        await backupFile();
        res.send("Backup berhasil dibuat.");
    } catch (error) {
        res.status(500).send("Terjadi kesalahan saat membuat backup.");
    }
});

// GET /users - Mengambil semua pengguna
router.get("/", async (req, res) => {
    const users = await readFile();
    res.json(users);
});

// GET /users/search?name=Nama - Mencari pengguna berdasarkan nama
router.get("/search", async (req, res) => {
    const users = await readFile();
    const { name } = req.query;

    if (!name) {
        return res.status(400).send("Parameter 'name' diperlukan.");
    }

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(name.toLowerCase())
    );

    if (filteredUsers.length === 0) {
        return res.status(404).send("Pengguna dengan nama tersebut tidak ditemukan.");
    }

    res.json(filteredUsers);
});

// POST /users - Menambahkan pengguna baru
router.post("/", async (req, res) => {
    const users = await readFile();
    const newUser = req.body;
    if (!newUser.id || !newUser.name || !newUser.email) {
        return res.status(400).send("Harap isi ID, nama, dan email.");
    }
    users.push(newUser);
    await writeFile(users);
    res.status(201).send("Pengguna baru berhasil ditambahkan.");
});

// Rute POST (Menambahkan Pengguna Baru):
router.post("/", async (req, res) => {
    const users = await readFile();
    const { id, name, email } = req.body;

    const error = validateInput(id, email);
    if (error) {
        return res.status(400).send(error);
    }

    if (!name) {
        return res.status(400).send("Nama tidak boleh kosong.");
    }

    users.push({ id, name, email });
    await writeFile(users);
    res.status(201).send("Pengguna baru berhasil ditambahkan.");
});


// PUT /users/:id - Memperbarui pengguna berdasarkan ID
router.put("/:id", async (req, res) => {
    const users = await readFile();
    const userId = parseInt(req.params.id, 10);
    const updatedUser = req.body;

    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).send("Pengguna tidak ditemukan.");
    }

    users[userIndex] = { ...users[userIndex], ...updatedUser };
    await writeFile(users);
    res.send("Pengguna berhasil diperbarui.");
});

// Rute PUT (Memperbarui Pengguna):
router.put("/:id", async (req, res) => {
    const users = await readFile();
    const userId = parseInt(req.params.id, 10);
    const { name, email } = req.body;

    const error = validateInput(userId, email);
    if (error) {
        return res.status(400).send(error);
    }

    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).send("Pengguna tidak ditemukan.");
    }

    users[userIndex] = { ...users[userIndex], name, email };
    await writeFile(users);
    res.send("Pengguna berhasil diperbarui.");
});

// DELETE /users/:id - Menghapus pengguna berdasarkan ID
router.delete("/:id", async (req, res) => {
    const users = await readFile();
    const userId = parseInt(req.params.id, 10);

    const newUsers = users.filter(user => user.id !== userId);
    if (users.length === newUsers.length) {
        return res.status(404).send("Pengguna tidak ditemukan.");
    }

    await writeFile(newUsers);
    res.send("Pengguna berhasil dihapus.");
});

module.exports = router;