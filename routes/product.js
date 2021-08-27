const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllCategories,
  searchProducts,
} = require("../controllers/product");

router.get("/Api/Products", getAllProducts);

router.get("/Api/Categories", getAllCategories);

router.get("/Api/Products/:products", searchProducts);

module.exports = router;
