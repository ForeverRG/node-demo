const Router = require("koa-router");

const router = new Router({ prefix: "/user" });

router.get("/", (ctx, next) => {
  ctx.response.body = "get user success";
});

module.exports = router;
