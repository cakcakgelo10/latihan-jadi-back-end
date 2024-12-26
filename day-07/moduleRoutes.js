// Mengimpor Express dan membuat router
const express = require('express');
const router = express.Router();

// Menambahkan rute di '/module'
router.get('/', (req, res) => {
    res.send('Ini adalah halaman modul.');
});

// Mengeksport router untuk digunakan di file lain
module.exports = router;
