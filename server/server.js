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

const getUserData= () => {
  let res= []
  for (var i = 0; i <=2000; i++) {
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
type Query {
  users: [User]
}
`;

const resolvers = {
  Query: {
    users: (root, args, context) => getUserData()
  }
};

const server = new ApolloServer({
 typeDefs,
 resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
