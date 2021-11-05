const mysql = require("mysql2");
const config = require("./config");

// create link pool
const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
});

// link database
connections.getConnection((err, connections) => {
  if (err) {
    console.log("get database connection error");
  } else {
    connections.connect((err) => {
      if (err) {
        console.log("database connect error");
      } else {
        console.log("database connect success");
      }
    });
  }
});

module.exports = connections.promise();
