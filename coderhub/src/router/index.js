const fs = require("fs");

const useRouters = function () {
  try {
    fs.readdirSync(__dirname).forEach((file) => {
      if (file === "index.js") {
        return;
      } else {
        const router = require(`./${file}`);
        this.use(router.routes());
        this.use(router.allowedMethods());
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = useRouters;
