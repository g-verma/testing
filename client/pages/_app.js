import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // uri: 'https://rickandmortyapi.com/graphql'
      uri: 'http://localhost:4000/graphql'
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
