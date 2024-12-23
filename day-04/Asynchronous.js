// Callback
function prosesData(data, callback) {
    console.log("Proses data:", data);
    callback();
}
prosesData("Input", () => {
    console.log("Data selesai diproses");
});
// ==============================================

// Promises 
const janji = new Promise((resolve, reject) => {
    let sukses = true;
    if (sukses) {
        resolve("Berhasil!");
    } else {
        reject("Gagal!");
    }
});

janji
    .then((hasil) => console.log(hasil))
    .catch((error) => console.error(error));
// ===============================================

// Async/Await
const fetchData = async () => {
    try {
        let hasil = await janji;
        console.log(hasil);
    } catch (error) {
        console.error(error);
    }
};
fetchData();
