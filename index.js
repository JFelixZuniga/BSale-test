const express = require("express");
const sequelize = require("./database/db");
require("dotenv").config();
const cors = require("cors");
const app = express();

// Configuración
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("/public"));

// rutas
app.use(require("./routes/product"));

// Iniciando el servidor
app.listen(PORT, () => {
  console.log(`Server ON ${PORT}`);

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to the db");
    })
    .catch((error) => {
      console.log("Error connecting: ", error);
    });
});
