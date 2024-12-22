// membuat array
const angka = [1, 2, 3, 4, 5];
const nama = ["Reza", "Fakhri", "Akbar"];

// akses elemen array
console.log(angka[0]);
console.log(nama[0]);

// =======================================

// menambah dan menghapus elemen
const buah = ["Alpukat", "Mangga"];
buah.push("Jeruk"); // menambahkan diakhir
buah.unshift("Jambu"); // menambahkan diawal
buah.pop(); // menghapus diakhir
buah.shift(); // menghpus diawal
console.log(buah);

// ========================================

// perulangan dalam array
const nomor = [1,2,3,4,5];
nomor.forEach((num) => console.log(num));

for (let i = 0; i < nomor.length; i++) {
    console.log(nomor[i]);
}

// ========================================

// manipulasi array lainnya
const angkaa = [1,2,3,4,5];
console.log(angkaa.map((num) => num * 2)); // Kali 2
console.log(angkaa.filter((num) => num % 2 === 0)); // Angka genap
console.log(angkaa.reduce((sum, num) => sum + num, 0)); // Total