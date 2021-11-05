const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.end("range visit success");
});

app.listen(7788, () => {
  console.log("server启动成功");
});
