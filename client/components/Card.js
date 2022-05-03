import React from 'react'
import { Box , Image, Text} from '@chakra-ui/react';

export const Card = (props) =>{

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
    <Box p={10} border="2px solid" borderRadius="md" borderColor="#f2f2f2">
      <Image src={image} alt={image} />
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
          color={'tomato'}
        >
          {name} {lastName}
        </Box>
        <Box color='gray.500'fontWeight='semibold'>
          {address}
          <Text fontSize='xs' color='gray.500'>
            {email}
          </Text>
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          <Box as='span' color='gray.600' fontSize='sm'>
            {phone}
          </Box>
        </Box>
    </Box>
  )
}



