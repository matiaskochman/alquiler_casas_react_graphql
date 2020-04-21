import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { Platform } from 'react-native';

// android replaces localhost with the following.
const host = Platform.OS === 'ios' ? 'http://localhost' : 'http://10.0.2.2';

// ios localhost is ok



export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${host}:4000`,
    // uri: '/graphql',
    // credentials: "omit"
    credentials: "same-origin"
  }),
  cache: new InMemoryCache()
});
