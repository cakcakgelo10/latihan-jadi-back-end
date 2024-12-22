// Operasi pada objek

const karyawan = {
    nama : "Reza",
    umur : 23,
    posisi : "Software Enginner"
};

// Menambah properti baru
karyawan.gaji = 10000000;
console.log("Setelah menambah gaji:", karyawan);

// Mengubah posisi
karyawan.posisi = "Senior Software Enginner";
console.log("Setelah mengubah posisi:", karyawan);

// Menampilkan semua properti
for (let key in karyawan) {
    console.log(`${key}: ${karyawan[key]}`);
}