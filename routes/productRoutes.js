const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/products/createProduct", productController.createProduct);
router.get("/products/getProduct", productController.getProduct);
router.post("/products/updateProduct", productController.updateProduct);
router.post("/products/deleteProduct", productController.deleteProduct);

module.exports = router;
