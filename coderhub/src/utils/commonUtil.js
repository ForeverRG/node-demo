const crypto = require("crypto");

const encrypt = (str) => {
  try {
    return crypto.createHash("md5").update(str).digest("hex");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  encrypt,
};
