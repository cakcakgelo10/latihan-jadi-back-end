// membuat objek
const orang = {
    nama : "Reza",
    umur : 23,
    pekerjaan : "Software enginner" 
};

// Mengakses Properti Objek
console.log(orang.nama); // output Reza
console.log(orang["umur"]); // ouput 23
console.log(orang.pekerjaan); // output Software enginner

// menanmbah dan mengubah properti
orang.alamat = "Bandung"; // menambah properti baru
orang.umur = 22; // mengubah properti

// menghapus properti
delete orang.pekerjaan;
console.log(orang);

// ======================================================

// perulangan pada objek
for (let key in orang) {
    console.log(`${key}: ${orang[key]}`);
}