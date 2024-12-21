// if, else if, if Digunakan untuk menjalankan logika berdasarkan kondisi.
const nilai = 85;

if (nilai >= 90) {
    console.log("Grade : A");
} else if (nilai >= 75) {
    console.log("Grade : B");
} else {
    console.log("Grade : C ");
}

// switch Digunakan untuk kasus dengan banyak kondisi.
const hari = "senin";

switch (hari) {
    case "senin":
        console.log("Hari pertama kerja.");
        break;
    case "sabtu":
    case "minggu":
        console.log("Akhir pekan !");
        break;
    default:
        console.log("Hari biasa");
}