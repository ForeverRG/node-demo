const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const useRouters = require("../router/index");
const handleError = require("./handle-error");

const app = new Koa();

app.useRouters = useRouters;

app.use(bodyParser());
app.useRouters();

app.on("error", handleError);

module.exports = app;
