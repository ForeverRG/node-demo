const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const useRouters = require("../router/index");

const app = new Koa();

app.useRouters = useRouters;

app.use(bodyParser());
app.useRouters();

module.exports = app;
