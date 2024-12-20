const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi kalkulator
const hitung = (angka1, angka2, operasi) => {
    switch (operasi) {
        case "+":
            return angka1 + angka2;
        case "-":
            return angka1 - angka2;
        case "*":
            return angka1 * angka2;
        case "/":
            return angka2 !== 0 ? angka1 / angka2 : "Tidak bisa membagi dengan nol";
        default:
            return "Operasi tidak dikenali!";
    }
};

// Interaksi dengan pengguna
rl.question("Masukkan angka pertama: ", (input1) => {
    rl.question("Masukkan angka kedua: ", (input2) => {
        rl.question("Pilih operasi (+, -, *, /): ", (operasi) => {
            const angka1 = parseFloat(input1);
            const angka2 = parseFloat(input2);
            const hasil = hitung(angka1, angka2, operasi);

            console.log(`Hasil: ${hasil}`);
            rl.close();
        });
    });
});
