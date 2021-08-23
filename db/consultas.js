const mysqlConnection = require("./config");

const getAllProductsAndCategory = () => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      `SELECT p.*, c.name AS name_category
      FROM product p
      INNER JOIN category c
      ON p.category = c.id;`,
      (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      }
    );
  });
};

const searchProducts = (products) => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(
      `SELECT p.*, c.name AS name_category
      FROM product p
      INNER JOIN category c
      ON p.category = c.id 
      WHERE p.name like '%${products}%'
        OR c.name like '%${products}%'`,
      (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      }
    );
  });
};

module.exports = { getAllProductsAndCategory, searchProducts };
