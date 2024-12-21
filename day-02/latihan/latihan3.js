// Kalkulator dengan Fungsi

const { parse } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;
const bagi = (a, b) => (b !== 0 ? a / b : "Tidak bisa membagi dengan nol");

rl.question("Masukan angka pertama: ", (input1) => {
    rl.question("Masukan angka kedua: ", (input2) => {
        rl.question("Pilih operasi (+, -, *, /): ", (operasi) => {
            const angka1 = parseFloat(input1);
            const angka2 = parseFloat(input2);

            let hasil;
            switch (operasi) {
                case "+":
                    hasil = tambah(angka1, angka2);
                    break;
                case "-":
                    hasil = kurang(angka1, angka2);
                    break;
                case "*":
                    hasil = kali(angka1, angka2);
                    break;
                case "/":
                    hasil = bagi(angka1, angka2);
                    break;
                default:
                    hasil = "Operasi tidak dikenali !";
            }

            console.log(`Hasil: ${hasil}`);
            rl.close();
        });
    });
});