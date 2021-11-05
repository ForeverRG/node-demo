const fs = require("fs");

// const readStream = fs.createReadStream("./bar.txt");
// const writeStream = fs.createWriteStream("./bar2.txt");

// readStream.pipe(writeStream, { end: false });

// writeStream.close();

// Stream的写法
const reader = fs.createReadStream("./bar.txt");
const writer = fs.createWriteStream("./foz.txt");

reader.pipe(writer);

// writer.close();
