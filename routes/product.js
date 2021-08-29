const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  searchProducts,
  getAllProductsByCategory,
} = require("../controllers/product");

router.get("/Api/Products", getAllProducts);

router.get("/Api/Products/:products", searchProducts);

router.get("/Api/Categories/:category", getAllProductsByCategory);

module.exports = router;
