const express = require('express');
const User = require('../models/userModel');
const fs = require('fs');

const router = express.Router();

// GET: Ambil semua pengguna
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Tambah pengguna baru
router.post('/', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = new User({ name, email, age });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT: Perbarui pengguna berdasarkan ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedUser) return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE: Hapus pengguna berdasarkan ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
        res.status(200).json({ message: 'Pengguna berhasil dihapus' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET: Backup file JSON
router.get('/backup', (req, res) => {
    const sourceFile = './data/users.json';
    const backupFile = './data/backup_users.json';

    fs.copyFile(sourceFile, backupFile, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Backup gagal' });
        }
        res.status(200).json({ message: 'Backup berhasil dibuat' });
    });
});

module.exports = router;