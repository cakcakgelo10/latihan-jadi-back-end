// Membaca file
const fs = require("fs");
fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
// ===============================================

// Menulis file
fs.writeFile("file.txt", "Hallo, Node.js !", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File berhasil ditulis");
    
})