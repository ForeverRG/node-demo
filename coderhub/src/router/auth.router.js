const Router = require("koa-router");
const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../app/config");

const authRouter = new Router({ prefix: "/auth" });

authRouter.get("/token", (ctx, next) => {
  const user = ctx.request.body;
  const token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 60 * 60, // one hour
    algorithm: "RS256",
  });
  ctx.body = { user, token };
});

module.exports = authRouter;
