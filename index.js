const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("./ProductOperation");
app.use(express.json());

mongoose
  .connect("mongodb://localhost/DB01", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connection to MongoDB created");
      let product = await createProduct("F.SC,BSSE",20);
    console.log(product);
    // let updatedProduct = updateProduct(
    //   "656ca75f11bead1e904ec920",
    //   "dell ",
    //   "updated",
    // );
    //  console.log(await deleteProduct("656ca75f11bead1e904ec920"));
  })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });
app.listen(3017);