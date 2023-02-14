const { getProduct, getProducts, addProduct} = require('./product.resolvers')

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
  },
  Mutation: {
    addProduct
  }
};

module.exports = resolvers
