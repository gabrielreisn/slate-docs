import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://b48da64ab08e.ngrok.io/graphql/',
  cache: new InMemoryCache(),
});
