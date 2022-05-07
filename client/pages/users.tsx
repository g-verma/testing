import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Cardx } from "../components/Card";
import { GET_USERS } from "../lib/queries";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import style from './users.module.css'

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
    <div className={style.wrapper} >
       <Container>
       <Grid container spacing={1}>
      {users.map(({ id, name, lastName, address, phone, email }) => (
        <Grid key={Math.random()} item xs={12} sm={4} md={4} lg={3}>
        <Cardx name={name} lastName={lastName} email={email} phone={phone} address={address}/>
        </Grid>
      ))}
      </Grid>
    </Container>
    </div>
  );
}
