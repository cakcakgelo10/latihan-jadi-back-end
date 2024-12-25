require("dotenv").config();
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Halo dari server dengan PORT dari .env!");
});

server.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
