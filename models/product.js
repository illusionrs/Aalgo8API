const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productid: {
    type: String,
    unique: true,
    required: true
  },

  productname: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  }
});

const product = mongoose.model("product", productSchema);

module.exports = product;
