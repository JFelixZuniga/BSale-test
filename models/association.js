const Product = require("./product");
const Category = require("./category");

// Uno a muchos, 1 a N
// Categoria va a tener muchos productos
// Se añade una clave a la tabla product

Category.hasMany(Product, {
  foreignKey: "category",
});

Product.belongsTo(Category, {
  sourceKey: "id",
  foreignKey: "category",
});

module.exports = {
  Category,
  Product,
};
