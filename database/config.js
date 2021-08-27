// Variables de configuración de la base de datos
module.exports = {
  database: {
    username: process.env.DB_USERNAME || "bsale_test",
    password: process.env.DB_PASSWORD || "bsale_test",
    database: process.env.DB_DATABASE || "bsale_test",
    host:
      process.env.DB_HOST ||
      "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    dialect: process.env.DB_DIALECT || "mysql",
  },
};
