import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: process.env.REACT_APP_GIPHY_URL,
  responseTransformer: async (response) => {
    return response.json().then(({ data }) => {
      return data;
    });
  },
});

//client
const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          trending: offsetLimitPagination(),
          search: offsetLimitPagination(),
        },
      },
    },
  }),
  link: restLink,
});

export default client;
