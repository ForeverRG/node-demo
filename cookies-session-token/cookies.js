const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();

const cookiesRouter = new Router();

cookiesRouter.get("/cookies", async (ctx, next) => {
  ctx.cookies.set("name", "range", {
    maxAge: 10 * 1000, // 10s
  });
  await next();
});

cookiesRouter.get("/cookies", (ctx, next) => {
  ctx.body = `设置的cookies为:${ctx.cookies.get("name")}`;
});

app.use(cookiesRouter.routes());
app.use(cookiesRouter.allowedMethods());

app.listen(7788, () => {
  console.log("server setup success");
});
