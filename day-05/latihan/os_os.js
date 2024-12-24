const os = require("os");

console.log("Nama Host:", os.hostname());
console.log("Total Memori:", os.totalmem() / (1024 *  1024), "MB" );
console.log("Memori Bebas:", os.freemem() / (1024 * 1024), "MB" );


