const express = require("express");
const Razorpay = require("razorpay");
const order = require("../models/order.js");
const router = express.Router();
const shortid = require("shortid");

const razorpay = new Razorpay({
  key_id: "rzp_test_CLxxusfQBtFGDo",
  key_secret: "NUZ8NFKrsyt0bQURON9mZYOI"
});

router.post("/payment", async (req, res) => {
  const { amount, useremail, productid, productname } = req.body;

  const payment_capture = 1;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture
  };

  try {
    const response = await razorpay.orders.create(options);
    const ordersave = new order({
      productid,
      productname,
      useremail,
      status: "paid"
    });
    ordersave.save();

    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
