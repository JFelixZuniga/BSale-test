const { Product, Category } = require("../models/association");
const { Op } = require("sequelize");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      include: [
        {
          model: Category,
          as: "name_category",
          attributes: ["name"],
        },
      ],
      attributes: { exclude: ["category"] },
    });
    res.status(200).send({
      cantidad: allProducts.length,
      productos: allProducts,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.findAll();
    res.status(200).send(allCategories);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const searchProducts = async (req, res) => {
  const { products } = req.params;
  try {
    const allFilteredProducts = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${products}%`,
        },
      },
      include: [
        {
          model: Category,
          as: "name_category",
          attributes: ["name"],
        },
      ],
      attributes: { exclude: ["category"] },
    });
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
};

module.exports = { getAllProducts, getAllCategories, searchProducts };
