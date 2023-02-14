const getProduct = (_, { id }) => {
  return {
    id: '1212',
    name: "Prod 1",
    price: 13.23,
    description: "Prueba",
    image: "www.google.com",
    createdAt: new Date().toISOString()
  }
}

const getProducts = () => {
  return []
}

module.exports = {
  getProduct,
  getProducts,
}
