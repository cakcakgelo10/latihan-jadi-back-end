// Callback
function bacaFile(namaFile, callback) {
    console.log(`Membaca file: ${namaFile}...`);
    setTimeout(() => {
        callback(`Isi file ${namaFile}`);
    }, 2000);
}

bacaFile("data.txt", (isi) => {
    console.log(isi); 
});