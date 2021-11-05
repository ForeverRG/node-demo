const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const app = express();

// app.get("/", (req, res, next) => {
//   next();
//   res.end("success");
// });
// app.use((req, res, next) => {
//   console.log("first middleware");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("second middleware");
//   next();
// });

// // app.use("/login", (req, res, next) => {
// //   // res.end("path middleware success");
// //   console.log("path middleware");
// // });

// app.get("/home", (req, res, next) => {
//   console.log("home path and method middleware01");
// });

// app.post("/login", (req, res, next) => {
//   console.log("login path and method middleware01");
// });
// app.listen(7788, () => {
//   console.log("server start");
// });

// app.get(
//   "/data",
//   (req, res, next) => {
//     console.log("home path and method middleware 02");
//     next();
//   },
//   (req, res, next) => {
//     console.log("home path and method middleware 03");
//     next();
//   },
//   (req, res, next) => {
//     console.log("home path and method middleware 04");
//     res.end("home page");
//   }
// );

// app.use(express.json(), (req, res, next) => {
//   console.log(req.body);
// });

// app.use(express.urlencoded({ extended: true }));

// app.post("/login", (req, res, next) => {
//   console.log(req.body);
//   res.end("Coderwhy, Welcome Back~");
// });

// app.post("/products", (req, res, next) => {
//   console.log(req.body);
//   res.end("Upload Product Info Success~");
// });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./upload/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({
//   storage,
// });

// app.use("/uploadFile", upload.any(), (req, res, next) => {
//   res.end("upload file success");
// });

// app.use("/uploadFiles", upload.array("file"), (req, res, next) => {
//   res.end("upload files success");
// });

// const morgan = require("morgan");
// const writeStream = fs.createWriteStream("./logs/test.log", {
//   flags: "a+",
// });

// app.use(morgan("combined", { stream: writeStream }));

// app.get("/", (req, res, next) => {
//   res.end("记录日志成功");
// });

// app.get("/products/:id/:detail", (req, res, next) => {
//   console.log(req.params);
//   res.end("success");
// });

// app.get("/login", (req, res, next) => {
//   console.log(req.query);
//   res.end("success");
// });

// app.get("/products/", (req, res, next) => {
//   res.status(200);
//   res.json([{ name: "range" }]);
// });

// const userRouter = require("./routers/users");
// app.use("/users", userRouter);

// app.use(express.static("./build"));

// const USER_NOT_EXIST = "USER_NOT_EXIST";

app.get("/user", (req, res, next) => {
  next(new Error(USER_NOT_EXIST));
});

app.use((err, req, res, next) => {
  res.status(400);
  res.json({
    errCode: 400,
    errMsg: err.message,
  });
});

app.listen(7788, () => {
  console.log("启动成功");
});
