const connection = require("../app/database");

class UserService {
  // create user
  async create(user) {
    const { name, password } = user;
    const sql = `INSERT INTO user (name,password) VALUE (?,?)`;
    const result = await connection.query(sql, [name, password]);
    return result[0];
  }

  // delete user by name
  async deleteUserByName(userName) {
    return "delete user success";
  }

  // update user
  async updateUser(user) {
    return "update user success";
  }

  // get user by name
  async getUserByName(userName) {
    const sql = `SELECT name,password,createAt,updateAt,avatar_url FROM user WHERE name= ?`;
    const result = await connection.query(sql, [userName]);
    return result[0];
  }
}

module.exports = new UserService();
