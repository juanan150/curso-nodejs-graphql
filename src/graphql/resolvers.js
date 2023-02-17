const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory, getCategory } = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars');

const CategoryNameType = new RegularExpression(
  'CategoryNameType',
  /^[a-zA-Z0-9]{3,8}/
);

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    getPerson: (_, args) => `my ${args.name}, my ${args.age}`,
    getInt: () => 1,
    getFloat: () => 1.1,
    getString: () => 'Ho.a',
    getBoolean: () => true,
    getID: () => 'ahdushu',
    getNumbers: (_, args) => args.numbers,
    product: getProduct,
    products: getProducts,
    category: getCategory,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    addCategory,
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory
  }
};

module.exports = resolvers;
