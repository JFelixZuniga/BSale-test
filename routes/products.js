const express = require("express");
const router = express.Router();

const {
  getAllProductsAndCategory,
  searchProducts,
} = require("../db/consultas");

// http://localhost:3000/Api/Products/
router.get("/Api/Products", async (req, res) => {
  const allProducts = await getAllProductsAndCategory();

  res.send({
    cantidad: allProducts.length,
    productos: allProducts,
  });
});

// http://localhost:3000/Api/Products/Category/pisco
router.get("/Api/Products/Category/:category", async (req, res) => {
  const { category } = req.params;
  const allProducts = await getAllProductsAndCategory();

  const filerByCategory = (category) => {
    return allProducts.filter((p) => p.name_category === category);
  };

  res.send({
    cantidad: filerByCategory(category).length,
    productos: filerByCategory(category),
  });
});

// http://localhost:3000/Api/Products/Search/bebida
router.get("/Api/Products/Search/:products", async (req, res) => {
  const { products } = req.params;
  const allFilteredProducts = await searchProducts(products);
  res.send({
    cantidad: allFilteredProducts.length,
    productos: allFilteredProducts,
  });
});

module.exports = router;
