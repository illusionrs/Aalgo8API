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

router.post("/", (req, res) => {
  const { productname, productid, price } = req.body;

  if (!productname || !productid || !price)
    return res.status(400).json({ msg: "all field required" });

  const productsave = new product({
    productname,
    productid,
    price
  });
  productsave.save();
  res.send("recieved");
});

module.exports = router;
