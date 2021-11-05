const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa(arguments);

// app.use((ctx, next) => {
//   ctx.response.body = "hello range";
// });

// app.use((ctx, next) => {
//   if ((ctx.request.method = "get")) {
//     if ((ctx.request.url = "/login")) {
//       ctx.response.body = "login success";
//     }
//   } else {
//     ctx.response.body = "other request";
//   }
// });

// const userRouter = require("./router/user");

// app.use(userRouter.routes());
// app.use(userRouter.allowedMethods());

// const router = new Router({ prefix: "/users" });

// router.get("/:id", (ctx, next) => {
//   console.log(ctx.request.url);
//   console.log(ctx.request.query);
//   console.log(ctx.request.params);
// });

// app.use(router.routes());

// const bodyParser = require("koa-bodyparser");
// const multer = require("koa-multer");
// const upload = multer();

// app.use(bodyParser());
// app.use(upload.any());

// app.use((ctx, next) => {
//   console.log(ctx.request.body);
//   console.log(ctx.req.headers);
//   ctx.response.body = "success";
// });

// const userRouter = new Router({ prefix: "/user" });
// const multer = require("koa-multer");

// const upload = multer({
//   dest: "./uploads/",
// });

// userRouter.post("/avatar", upload.single("avatar"), (ctx, next) => {
//   console.log(ctx.req.file);
//   ctx.response.body = "upload success";
// });

// app.use(userRouter.routes());

// app.use((ctx, next) => {
//   ctx.status = 404;
//   ctx.response.body = "range not found";
// });

// const static = require("koa-static");

// app.use(static("./build"));

app.use((ctx, next) => {
  ctx.app.emit("error", new Error("source not found"), ctx);
});

app.on("error", (err, ctx) => {
  ctx.status = 404;
  ctx.body = err.message;
});

app.listen(7788, "0.0.0.0", () => {
  console.log("koa setup success");
});
