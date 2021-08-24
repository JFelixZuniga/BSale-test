const express = require("express");
const router = express.Router();

const {
  getAllProductsAndCategory,
  searchProducts,
} = require("../db/consultas");

// http://localhost:3000/Api/Products/
router.get("/Api/Products", async (req, res) => {
  try {
    const allProducts = await getAllProductsAndCategory();

    res.status(200).send({
      cantidad: allProducts.length,
      productos: allProducts,
    });
  } catch (error) {
    res.status(500).send({
      error: `Algo salió mal... ${error}`,
      code: 500,
    });
  }
});

// http://localhost:3000/Api/Products/Category/pisco
router.get("/Api/Products/Category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const allProducts = await getAllProductsAndCategory();
    const filerByCategory = (category) => {
      return allProducts.filter((p) => p.name_category === category);
    };

    res.status(200).send({
      cantidad: filerByCategory(category).length,
      productos: filerByCategory(category),
    });
  } catch (error) {
    res.status(500).send({
      error: `Algo salió mal... ${error}`,
      code: 500,
    });
  }
});

// http://localhost:3000/Api/Products/Search/bebida
router.get("/Api/Products/Search/:products", async (req, res) => {
  const { products } = req.params;
  try {
    const allFilteredProducts = await searchProducts(products);
    res.status(200).send({
      cantidad: allFilteredProducts.length,
      productos: allFilteredProducts,
    });
  } catch (error) {
    res.status(500).send({
      error: `Algo salió mal... ${error}`,
      code: 500,
    });
  }
});

module.exports = router;
