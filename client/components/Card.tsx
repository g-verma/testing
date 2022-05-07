import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader'
export const Cardx = (props:any) =>{

// Genereates a number between 0 to 1;
Math.random();

// to gerate a randome rounded number between 1 to 80;
var theRandomNumber = Math.floor(Math.random() * 80) + 1;
  const {
    name = 'Rick Sanchez',
    image = `https://rickandmortyapi.com/api/character/avatar/${theRandomNumber}.jpeg`,
    address,
    phone,
    email,
    lastName
  } = props;

  return (
  <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={`${name} ${lastName}`}
        subheader={email}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={image}
      />
      <CardContent>
        <Typography variant="overline" color="text.secondary">
        {address}
        </Typography>
        <Typography variant='h6'>{phone}</Typography>
      </CardContent>
    </Card>
  )
}



