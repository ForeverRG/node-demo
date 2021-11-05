// export config parameters from this file
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const publicKey = fs.readFileSync(path.resolve(__dirname, "./keys/public.key"));
const privateKey = fs.readFileSync(
  path.resolve(__dirname, "./keys/private.key")
);

module.exports = {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;

module.exports.PUBLIC_KEY = publicKey;
module.exports.PRIVATE_KEY = privateKey;
