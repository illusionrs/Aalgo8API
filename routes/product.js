const express = require("express");
const product = require("../models/product");

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await product.find({});

  res.send(result);
});

router.get("/:id", async (req, res) => {
  const result = await product.find({ productid: req.params.id });

  if (result) res.send(result);
  else {
    res.status(400).json({ msg: "not exist" });
  }
});

router.post("/", async (req, res) => {
  const { productname, productid, price } = req.body;

  if (!productname || !productid || !price)
    return res.status(400).json({ msg: "all field required" });

    const check = await product.findOne({productid:productid})
    if(check)
    res.json({msg:"product with same id exists"})

  const productsave = new product({
    productname,
    productid,
    price
  });
  const svdata= await productsave.save();
  res.json({ data:svdata})
});

module.exports = router;
