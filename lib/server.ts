import { ApolloServer, gql } from "apollo-server";
import { starterItems } from "./constants.ts";

const typeDefs = gql`
  type StarterItem {
    id: ID!
    name: String!
    description: String
    price: Float
    image: String
  }

  type Query {
    starterItems: [StarterItem!]!
  }
`;

const resolvers = {
  Query: {
    starterItems: () => starterItems,
  },
};

const PORT = process.env.PORT || 4000;
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 The server is running at ${url}`);
});
