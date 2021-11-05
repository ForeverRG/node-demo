const userService = require("../service/user.service");

class UserController {
  async create(ctx, next) {
    // 返回数据
    ctx.body = await userService.create(ctx.request.body);
  }

  // delete user
  async deleteUserByName(ctx, next) {
    ctx.body = await userService.deleteUserByName(ctx.request.body.name);
  }

  // update user
  async updateUser(ctx, next) {
    ctx.body = await userService.updateUser(ctx.request.body);
  }

  // get user
  async getUserByName(ctx, next) {
    ctx.body = await userService.getUserByName(ctx.request.body.name);
  }
}

module.exports = new UserController();
