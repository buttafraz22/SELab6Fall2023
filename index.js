const express = require("express");
const bodyParser = require("body-parser");
require("./utils/db");
const app = express();
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoute");
const invoiceRoutes = require('./routes/invoiceRoute');
const port = 3005;

app.use(bodyParser.json());

app.use("/productApi", productRoutes);
app.use("/userApi", userRoutes);
app.use("/invoiceApi", invoiceRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/Welcome", (req, res) => {
  res.send("Afraz Butt Hello");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
