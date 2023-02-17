const ProductsService = require('./../services/product.service');

const service = new ProductsService();

const getProduct = async (_, { id }) => {
  const product = await service.findOne(id);
  return product;
};

const getProducts = () => {
  return service.find({});
};

const addProduct = (_, { dto }) => {
  return service.create(dto);
};

const updateProduct = (_, { id, dto }) => {
  return service.update(id, dto);
};

const deleteProduct = async (_, { id }) => {
  await service.delete(id);
  return id;
};

const getProductsByCategory = (parent) => {
  const { id } = parent.dataValues;
  return service.getByCategory(id);
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
