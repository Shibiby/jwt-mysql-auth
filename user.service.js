const pool = require('../../config/database');

module.exports = {
    createUser: (data, callback) => {
        pool.query(
            `INSERT INTO user_reg(firstName,lastName,gender,email,password,number ) values(?,?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    getUsers: callback => {
        pool.query(
            `SELECT id,firstName,lastName,gender,email,number from user_reg`,
            [
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    getUserByUserId: (id, callback) => {
        pool.query(`SELECT id,firstName,lastName,gender,email,number from user_reg WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            });
    },

    updateUser: (data, callback) => {
        pool.query(
            `UPDATE user_reg SET firstName=?,lastName=?,gender=?,email=?,password=?,number=? WHERE id = ?`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    
    deleteUser: (data, callback) => {
        pool.query(
            `DELETE FROM user_reg WHERE id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },

    getUserByUserEmail: (email, callBack) => {
        pool.query(
          `select * from user_reg where email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
};