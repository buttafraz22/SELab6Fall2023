const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/createProducts", productController.createProduct);
router.get("/products/getProduct", productController.getProduct);

module.exports = router;
