const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productid: {
    type: String,
    unique: true,
    required: true
  },

  productname: {
    type: String,
    required: true
  },

  userEmail: {
    type: String,
    unique: true
  },
  status: {
    type: String,
    default: "unpaid"
  }
});

const order = mongoose.model("Order", orderSchema);

module.exports = order;
