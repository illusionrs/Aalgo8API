const express = require("express");

const port = 8080;
const app = express();
app.get("/he", (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log("working"));
