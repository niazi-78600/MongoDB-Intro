const ProductModel = require("./model/ProductModel");
const createProduct = async (Name,Age ) => {
  console.log("Create Product");
  let product = new ProductModel();
  product.Name = Name;
  product.Age = Age;
  await product.save();
  return product;
};
const updateProduct = async (_id, Name, Age) => {
  let product = await ProductModel.findById(_id);
  product.Name = Name;
  product.Age = Age;
  await product.save();
  return product;
};
const getAllProducts = async () => {
  let products = await ProductModel.find();
  return products;
};
const deleteProduct = async (_id) => {
  let product = await ProductModel.findByIdAndDelete(_id);
  return product;
};
module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;