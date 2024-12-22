const angka = [1, 2, 3, 4, 5];

// Menambah angka
angka.push(6);
console.log("Setelah menambah 6:", angka);

// Menghapus angka tertentu
const index = angka.indexOf(3);
if (index > -1) angka.splice(index, 1);
console.log("Setelah menghapus 3:", angka);

// Total elemen
const total = angka.reduce((sum, num) => sum + num, 0);
console.log("Total elemen:", total);

// Angka genap
const genap = angka.filter((num) => num % 2 === 0);
console.log("Angka genap:", genap);
