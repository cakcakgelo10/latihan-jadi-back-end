const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Siapa nama anda ?", (nama) => {
    console.log(`Halo, ${nama}!`);
    rl.close();
});