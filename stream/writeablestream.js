const fs = require("fs");

const writeStream = fs.createWriteStream("./bar.txt", {
  start: 0,
  flags: "r+",
  encoding: "utf-8",
  highWaterMark: 2,
});

writeStream.write("hello", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("一次写入成功");
});

writeStream.write("range", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("二次写入成功");
});

writeStream.end("hello range");
writeStream.on("close", () => {
  console.log("file close");
});
