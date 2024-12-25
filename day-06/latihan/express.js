const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Halo, Express !");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`); 
});