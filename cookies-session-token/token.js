const Koa = require("koa");
const jwt = require("jsonwebtoken");
const Router = require("koa-router");
const fs = require("fs");

const app = new Koa();
const jwtRouter = new Router();

const privateKey = fs.readFileSync("./keys/private.key");
const publicKey = fs.readFileSync("./keys/public.key");

jwtRouter.get("/getJwt", async (ctx, next) => {
  const user = { name: "range", age: "18" };
  const token = jwt.sign(user, privateKey, {
    expiresIn: 10 * 10,
    algorithm: "RS256",
  });
  ctx.body = { token: token };
});

jwtRouter.get("/checkJwt", (ctx, next) => {
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");

  try {
    const result = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });
    ctx.body = result;
  } catch (error) {
    ctx.body = "token无效";
  }
});

app.use(jwtRouter.routes());
app.use(jwtRouter.allowedMethods());

app.listen(7788, () => {
  console.log("server setup success");
});
