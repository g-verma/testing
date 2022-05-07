import { gql } from '@apollo/client'
export const GET_USERS = gql`
query Query($offset: Int, $limit:Int)  {
  users (offset: $offset, limit:$limit){
    id
    name
    lastName
    address
    email
    phone
  }
}`
