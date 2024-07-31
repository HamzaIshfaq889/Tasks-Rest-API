const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model("products", ProductsSchema);
