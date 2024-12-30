const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

// Inisialisasi aplikasi
const app = express();
app.use(bodyParser.json());

// Koneksi MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/latihanDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Terhubung ke MongoDB'))
    .catch((err) => console.error('Koneksi MongoDB gagal:', err));

// Gunakan rute pengguna
app.use('/users', userRoutes);

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
