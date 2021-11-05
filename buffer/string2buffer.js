// english character
const msg = "hello range";
const msgBuffer = Buffer.from(msg);
console.log(msgBuffer.toString());

// chinese character
const msgCN = "你好";
const msgCNBuffer = Buffer.from(msgCN, "utf16le");
console.log(msgCNBuffer.toString("utf16le"));

// 通过分配内存方式创建
const allocBuffer = Buffer.alloc(6);
allocBuffer[0] = 88;
allocBuffer[1] = 0x88;
console.log(allocBuffer);

// handle files
const fs = require("fs");
const sharp = require("sharp");
fs.readFile("./bar.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});
fs.readFile("./bar.png", (err, data) => {
  console.log(data);

  fs.writeFile("../bar_copy.png", data, (err) => {
    console.log(err);
  });
});
sharp("./bar.png")
  .resize(200, 200)
  .toBuffer()
  .then((data) => {
    fs.writeFile("../bar_copy2.png", data, (err) => {
      console.log(err);
    });
  });
