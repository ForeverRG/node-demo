const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello node server");
});

server.listen(7788, "0.0.0.0", () => {
  console.log("node server 启动成功");
});
