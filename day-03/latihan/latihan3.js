// Kombinasi Array dan Objek

const produk = [
    { nama: "laptop", harga: 5000000, stok: 10},
    { nama: "Smart Phone", harga: 4000000, stok: 20},
    { nama: "Tablet", harga: 3000000, stok: 30}
];

// Menambah produk
produk.push({nama: "Smart watch", harga: 6000000, stok: 40});
console.log("Setelah menambah produk:", produk);

// Menghapus produk berdasarkan nama
const namaProduk = "Tablet";
const index = produk.findIndex((item) => item.nama === namaProduk);
if (index > -1) produk.splice(index, 1);
console.log("Setelah menghapus produk Tablet:", produk);

    {
}

// Produk dengan stok lebih dari 10
const stokLebihDari10 = produk.filter((item) => item.stok > 10);
console.log("Produk dengan stok lebih dari 10:", stokLebihDari10);
