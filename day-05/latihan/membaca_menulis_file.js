const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.err(err);
        return;
    }
    console.log("Isi file:", data);

    // Menambah data baru
    const tambah = "\nRifqi";
    fs.appendFile("data.txt", tambah, (err) => {
        if (err) {
            console.err(err);
            return;
        }
        console.log("Nama baru berhasil ditambahkan !");
    });
});