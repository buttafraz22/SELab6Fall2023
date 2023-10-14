const Product = require("../models/product");

async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getProduct(req,res){
    try{
        const products = await Product.find({});
        res.send(products);
    }catch(err){
        res.send(500).json({error: err.message});
    }

}

async function updateProduct(req, res) {
  try {
    const productId = req.body.id;

    const newProductName = req.body.name;

    const product = await Product.findById({_id: productId});

    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    product.name = newProductName;

    await product.save();

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createProduct, getProduct, updateProduct };
