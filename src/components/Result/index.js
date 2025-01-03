import React from 'react';
import { Box, Heading, Text, HStack ,Center } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function Result() {
  const basket = useSelector((state) => state.money.basket); // Sepetteki ürünler
  const total = useSelector((state) => state.money.total); // Toplam tutar

  // Adetlerin toplamını hesaplıyoruz
  const totalAdet = basket.reduce((total, product) => total + product.adet, 0);

  return (
    <Center>
    <Box m="14px">
      <Heading size="md"  fontFamily="monospace" textDecoration="underline"  color="blackAlpha.700">Sepetiniz</Heading>
   
      {basket.map((prd, i) => (
        <HStack key={i} spacing="20px"  m="10px" p="5px" bg="main2" fontFamily="monospace" fontSize="15px" justify="space-between"> 
          <Text>{prd.title}</Text>
          <Text> x{prd.adet} </Text>
          <Text color="green.700">{prd.money} $</Text>
        </HStack>
      ))}
      {total && totalAdet && (
        <HStack bg="main2" fontFamily="monospace" fontSize="15px" m="8px" p="5px">
          <Text  fontSize="md">Toplam = {total} TL</Text>
         <Text fontSize="md">Adet =  {totalAdet}</Text>
        </HStack>
      )}

     {!total && !totalAdet && (
        <>
          <Text fontSize="md">  Ürün Bulunmamaktadır</Text>
        
        </>
      )}
  
    </Box>
    </Center>
  );
}

export default Result;
