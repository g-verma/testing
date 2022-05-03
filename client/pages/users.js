import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Card } from "../components/Card";
import { GET_USERS } from "../lib/queries";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Index() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const { error, fetchMore } = useQuery(GET_USERS, {
    variables: { page: page },
    onCompleted: (data) => {

      if (!users.length) {
        setUsers(data.users);
      }
    }
  });
  if (error) return <p>Error...</p>;
  return (
    <div>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} >
      {users.map(({ id, name, lastName, address, phone, email }) => (
        <GridItem key={id}   
                  gridRow={{ lg: 2, md:4, sm:8 }}
                  gridColumn={{
                    base: "1 / -1",
                    lg: `${2 + (4 - 1)} / span 4`,
                    md: `${6 + (6 - 1)} / span 6`,
                    sm: `${8 + (8 - 1)} / span 8`
                  }}
        >
        <Card name={name} lastName={lastName} email={email} phone={phone} address={address}/>
        </GridItem>
      ))}
      </Grid>
  </div>
  );
}
