const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Koneksi MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/latihanCrudDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Koneksi MongoDB berhasil'))
    .catch((err) => console.error('Koneksi MongoDB gagal:', err));

// Gunakan rute produk
app.use('/products', productRoutes);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
