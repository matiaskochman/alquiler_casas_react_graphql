import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000",
    // uri: '/graphql',
    // credentials: "omit"
    credentials: "same-origin"
  }),
  cache: new InMemoryCache()
});
