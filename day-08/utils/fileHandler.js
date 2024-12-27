const { read } = require("fs");
const { parse } = require("path");

const fs = require("fs").promises;

const filePath = "./data/users.json";

// Membaca data dari file JSON
const readFile = async () => {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
};

// Menulis data ke file JSON
const writeFile = async (data) => {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readFile, writeFile};