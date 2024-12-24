//  Membuat Server HTTP
const http = require("http");

const server = http.createServer((req, res) => {
    const waktu = new Date().toLocaleTimeString();
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(`Halo waktu server saat ini: ${waktu}\n`);
});

server.listen(4000, () => {
    console.log("Server berjalan di http://localhost:4000"); 
});