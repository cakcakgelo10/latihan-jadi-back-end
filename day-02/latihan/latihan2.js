// Mencetak Pola Bintang

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan jumlah baris: ", (baris) => {
    if (isNaN(baris)) {
        console.log("Input harus berupa angka !");
    } else {
        for (let i = 1; i <= baris; i++) { // jika ingin terbalik ( " for (let i = baris; i > 0; i--) { " )
            console.log("*".repeat(i));
        }
    }
    rl.close();
});

