const express = require("express");
const cors = require("cors");
const app = express();

// Settings
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Routes
app.use(require("./routes/products"));

// Starting the server
app.listen(port, () => {
  console.log(`Server ON ${port}`);
});
