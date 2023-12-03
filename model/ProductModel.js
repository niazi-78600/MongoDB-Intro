const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  Name: String,
  Age: Number,
  slug: {
    type: String,
    lowercase: true,
  },
});
const ProductModel = mongoose.model("Education", productSchema);
module.exports = ProductModel;