const Router = require("koa-router");

const userRouter = new Router({ prefix: "/user" });

userRouter.get("/", (ctx, next) => {
  ctx.body = "get user success";
});

module.exports = userRouter;
