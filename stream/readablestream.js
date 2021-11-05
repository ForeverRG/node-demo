const fs = require("fs");

const readStream = fs.createReadStream("../bar.txt", {
  start: 2,
  end: 10,
  highWaterMark: 2,
});

// listen read data
readStream.on("data", (data) => {
  console.log(data);
});

// listen open file, number:flag of file
readStream.on("open", (number) => {
  console.log("file open" + number);
});

// listen close file
readStream.on("close", () => {
  console.log("file close");
});
