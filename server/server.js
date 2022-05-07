const { ApolloServer, gql } = require("apollo-server");
const casual = require('casual');

casual.define('user', function() {
  return {
    id: casual.uuid,
    name: casual.first_name,
    lastName: casual.last_name,
    address: casual.address,
    email: casual.email,
    phone: casual.phone
  };
});

const getUserData= (args) => {
  const { limit} = args
  let res= []
  for (var i = 0; i <=limit-1; i++) {
   res.push(casual.user)
  }
  return res;
}

const typeDefs = gql`
type User {
  id: String
  name: String,
  lastName: String
  address: String,
  email: String,
  phone: String
}
type Query{
  users(offset: Int, limit: Int, first:Int): [User]
}
`;

const resolvers = {
  Query: {
    users: (root, args, context) => getUserData(args)
  }
};

const server = new ApolloServer({
 typeDefs,
 resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
