// Promises
function cekPrima(angka) {
    return new Promise((resolve, reject) => {
        if (angka < 2) {
            reject("Bilangan harus lebih besar dari 1.");
        }
        for (let i = 2; i < angka; i++) {
            if (angka % i === 0) {
                reject(`${angka} bukan bilangan prima.`);
            }
        }
        resolve(`${angka} adalah bilangan prima.`);
    });
}

cekPrima(7)
    .then((hasil) => console.log(hasil))
    .catch((error) => console.error(error));
