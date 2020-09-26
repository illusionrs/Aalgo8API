const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 8080;
const app = express();

mongoose.connect(
  "mongodb+srv://rajeev255:rajeev123@cluster0-uyau0.mongodb.net/EmployeeDb?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    useCreateIndex: true
  }
);

mongoose.connection.on("connected", () => console.log("connected"));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<center><h1>API IS LIVE</h1></center>");
});

app.listen(port, () => console.log("working"));

app.use("/user", require("../routes/user.js"));
app.use("/admin", require("../routes/admin.js"));
app.use("/pay", require("../routes/payment.js"));
app.use("/productdata", require("../routes/product.js"));
