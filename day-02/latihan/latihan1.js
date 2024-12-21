// Menentukan Bilangan Ganjil atau Genap

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Masukan angka: ", (angka) => {
    if (isNaN(angka)) {
        console.log("Input harus berupa angka !");
    } else if (angka % 2 === 0) {
        console.log("Angka tersebut adalah bilangan genap.");
    } else {
        console.log("Angka tersebut adalah bilangan ganjil.");
    }
    rl.close();
});