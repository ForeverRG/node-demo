const jwt = require("jsonwebtoken");
const errorTypes = require("../constants/error-type");
const userService = require("../service/user.service");
const { encrypt } = require("../utils/commonUtil");
const { PUBLIC_KEY } = require("../app/config");

class UserMiddleware {
  // 验证用户是否存在
  async verifyUserExist(ctx, next) {
    const { name } = ctx.request.body;
    const user = await userService.getUserByName(name);
    if (user.length > 0) {
      ctx.app.emit("error", new Error(errorTypes.USER_ALREADY_EXISTS), ctx);
      return;
    }
    await next();
  }

  // 验证用户输入是否合法
  async verifyUserLegal(ctx, next) {
    const { name, password } = ctx.request.body;
    if (!name || !password) {
      // emit error signal
      ctx.app.emit(
        "error",
        new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED),
        ctx
      );
      return;
    }
    await next();
  }

  // 用户密码加密
  async encryptPassword(ctx, next) {
    ctx.request.body.password = encrypt(ctx.request.body.password.toString());
    await next();
  }

  // 验证用户是否token是否过期/存在
  async verifyUserToken(ctx, next) {
    const authorization = ctx.headers.authorization;
    const token = authorization.replace("Bearer ", "");

    try {
      const result = jwt.verify(token, PUBLIC_KEY, {
        algorithms: ["RS256"],
      });
      ctx.body = result;
    } catch (error) {
      ctx.app.emit("error", new Error(errorTypes.UNAUTHORIZATION), ctx);
      return;
    }

    await next();
  }
}

module.exports = new UserMiddleware();
