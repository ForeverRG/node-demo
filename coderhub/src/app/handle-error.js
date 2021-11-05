const errorTypes = require("../constants/error-type");

const handleError = (err, ctx) => {
  let message, status;

  switch (err.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400;
      message = "name or password is required";
      break;
    case errorTypes.USER_ALREADY_EXISTS:
      status = 400;
      message = "user already exists";
      break;
    case errorTypes.UNAUTHORIZATION:
      status = 401;
      message = "user unauthorization";
      break;
    default:
      status = 500;
      message = "server error";
      break;
  }

  ctx.status = status;
  ctx.body = message;
};

module.exports = handleError;
