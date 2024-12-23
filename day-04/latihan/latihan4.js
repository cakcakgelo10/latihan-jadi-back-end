// Async/Await
async function prosesFile() {
    const bacaFileAsync = (namaFile) => 
        new Promise((resolve) => 
            setTimeout(() => resolve(`Isi file ${namaFile}`), 2000)
        );

    console.log("Memulai proses....");
    
    let isi1 = await bacaFileAsync("file1.txt");
    console.log(isi1);
    
    let isi2 = await bacaFileAsync("file2.txt");
    console.log(isi2);
    
    console.log("Proses selesai !");
    
}

prosesFile();