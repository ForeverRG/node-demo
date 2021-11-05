const Koa = require("koa");
const Session = require("koa-session");
const Router = require("koa-router");

const app = new Koa();
const sessionRouter = new Router();

// session config
const session = new Session(
  {
    key: "sessionId",
    maxAge: 10 * 1000,
    signed: true, // use encryption
  },
  app
);
app.keys = ["range"];
app.use(session);

sessionRouter.get("/session", async (ctx, next) => {
  ctx.session.name = "range";
  await next();
});

sessionRouter.get("/session", (ctx, next) => {
  ctx.body = `设置的session为:${ctx.session.name}`;
});

app.use(sessionRouter.routes());
app.use(sessionRouter.allowedMethods());

app.listen(7788, () => {
  console.log("server setup success");
});
