// Menggabungkan Modul http dan fs untuk Membaca File dan Menampilkannya di Browser

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const waktu = new Date().toLocaleTimeString();
    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Terjadi kesalahan saat membaca file.");
            return;
        }
        // Tulis header dan respons sekali saja
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Halo waktu server saat ini: ${waktu}\nIsi file: ${data}`);
    });
});

server.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});
