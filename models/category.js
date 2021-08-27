const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Category = sequelize.define(
  "Category",
  {
    name: DataTypes.STRING,
  },

  {
    tableName: "category",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Category;
