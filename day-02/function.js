// function sederhana 
function sapa(nama) {
    return `Halo, ${nama} !`;
}

console.log(sapa("Reza")); // output : Halo, Reza !

// function anonim
const tambah = function(a, b) {
    return a + b;
};

// Arrow function
console.log(tambah(3, 4)); // ouput : 7

const kali = (a, b) => a * b;
console.log(kali(3, 4)); // output : 12