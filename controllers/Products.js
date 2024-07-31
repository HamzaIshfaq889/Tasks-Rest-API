const Product = require("../models/products");
const asyncWrapper = require("../middleware/async-wrapper");

const getProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
});

const getProduct = asyncWrapper(async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    return res.status(404).send(`No product found with this id: ${taskId}`);
  }

  res.status(200).json({ product });
});

const createProduct = asyncWrapper(async (req, res) => {
  const { name, price, quantity } = req.body;
  const task = await Product.create({ name, price, quantity });

  res.status(200).json({ task });
});

const updateProduct = asyncWrapper(async (req, res) => {
  const { id: productId } = req.params;
  const data = req.body;

  const product = await Product.findOneAndUpdate({ _id: productId }, data, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return res.status(404).send(`No product found with this id: ${taskId}`);
  }

  res.status(200).send({ product });
});

const deleteProduct = asyncWrapper(async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOneAndDelete({ _id: productId });

  if (!product) {
    return res.status(404).send(`No product found with this id: ${productId}`);
  }

  res.status(200).json({ product });
});

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
