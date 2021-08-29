const { Product, Category } = require("../models/association");
const { Op } = require("sequelize");

// Determina el número de página y la cantidad de productos a mostrar por página
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: products } = data;
  const currentPage = page ? +page + 1 : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, totalPages, currentPage, products };
};

// Retorna todos los productos y la cantidad de productos existentes en la bbdd. Recibe por query el número de página y la cantidad de productos a mostrar por página. Los parámetros de paginación son opcionales, y proporciona valores predeterminados para que la paginación funcione incluso cuando el cliente no especifica estos parámetros.
const getAllProducts = async (req, res) => {
  const { page = 0, size = 100 } = req.query;
  const { limit, offset } = getPagination(page, size);

  try {
    const data = await Product.findAndCountAll({
      include: [
        {
          model: Category,
        },
      ],
      attributes: { exclude: ["category"] },
      offset,
      limit,
    });

    const allProducts = getPagingData(data, page, limit);

    res.status(200).send(allProducts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Retorna todos los productos que conincidan con el parámetro ingresado
const searchProducts = async (req, res) => {
  const { products } = req.params;
  const { page = 0, size = 100 } = req.query;
  const { limit, offset } = getPagination(page, size);

  try {
    const data = await Product.findAndCountAll({
      where: {
        name: {
          [Op.like]: `%${products}%`,
        },
      },
      include: [
        {
          model: Category,
        },
      ],
      attributes: { exclude: ["category"] },
      offset,
      limit,
    });

    const allFilteredProducts = getPagingData(data, page, limit);

    res.status(200).send(allFilteredProducts);
  } catch (error) {
    res.status(500).send({
      error: `Algo salió mal... ${error}`,
      code: 500,
    });
  }
};

// Recibe como string el nombre de una categoría y retorna todos los productos de dicha categoría
const getAllProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const allProducts = await Category.findAll({
      where: {
        name: {
          [Op.like]: `${category}%`,
        },
      },
      include: [
        {
          model: Product,
          attributes: { exclude: ["category", "id"] },
        },
      ],
      attributes: { exclude: ["id"] },
    });
    res.status(200).send(allProducts[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProducts, searchProducts, getAllProductsByCategory };
