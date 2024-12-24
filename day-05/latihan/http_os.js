// Membuat Server HTTP untuk Menampilkan Data Sistem Menggunakan Modul os

const http = require("http");
const os = require("os");

const server = http.createServer((req, res) => {
    const namaHost = os.hostname();
    const totalMemori = (os.totalmem() / (1024 * 1024)).toFixed(2);
    const memoriBebas = (os.freemem() / (1024 * 1024)).toFixed(2);

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1> Informasi Sistem </h1>");
    res.write(`<p> Nama Host: ${namaHost} </p>`);
    res.write(`<p> Total Memori: ${totalMemori} MB </p>`);
    res.write(`<p> Memori Bebas: ${memoriBebas} MB </p>`);
    res.end();
});

server.listen(4000, () => {
    console.log("Server berjalan di http://localhost:4000");
});