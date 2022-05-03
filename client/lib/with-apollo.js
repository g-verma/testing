import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const apolloConfig = {
  link: new HttpLink({
    uir: 'https://rickandmortyapi.com/graphql'
  })
}

export default withData(apolloConfig)
