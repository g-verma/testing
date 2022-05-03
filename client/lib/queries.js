import { gql } from '@apollo/client'
export const GET_USERS = gql`
query Query {
  users {
    id
    name
    lastName
    address
    email
    phone
  }
}`