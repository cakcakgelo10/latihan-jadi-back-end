const express = require("express");
const router = express.Router();
const { readFile, writeFile } = require("../utils/fileHandler");

// GET /users - Mengambil semua pengguna
router.get("/", async (req, res) => {
    const users = await readFile();
    res.json(users);
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
