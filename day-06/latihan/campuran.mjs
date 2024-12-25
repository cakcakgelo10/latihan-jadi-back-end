// Import semua modul menggunakan import
import dotenv from "dotenv";
import chalk from "chalk";
import express from "express";

// Konfigurasi dotenv
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Halo, server Express dengan dotenv dan chalk !");
});

app.listen(port, () => {
    console.log(chalk.green(`Server berjalan di http://localhost:${port}`));
});
