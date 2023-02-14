const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core');
const { loadFiles } = require('@graphql-tools/load-files')
const resolvers = require('./resolvers')

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('src/**/*.graphql'),
    resolvers,
    plugins: [ApolloServerPluginLandingPageLocalDefault],
  });
  await server.start();
  server.applyMiddleware({ app });
};

module.exports = useGraphql;
