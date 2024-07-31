const express = require("express");
const router = express.Router();

const {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/Products");

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
