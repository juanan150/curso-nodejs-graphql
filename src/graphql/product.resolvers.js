const ProductsService = require('./../services/product.service');

const service = new ProductsService();

const getProduct = async (_, { id }) => {
  const product = await service.findOne(id);
  return product;
};

const getProducts = async () => {
  const products = service.find({});
  return products;
};

const addProduct = async (_, { dto }) => {
  const newProduct = service.create(dto);
  return newProduct;
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
};
