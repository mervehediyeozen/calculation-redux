import React from 'react';
import { Box, Heading, Image, Button, HStack, Badge, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { addButton ,removeButton } from '../../redux/FirstSlice';
import foto from '../../images/1.jpg';
import foto1 from '../../images/2.jpg';
import foto2 from '../../images/3.jpg';
import foto3 from '../../images/4.jpg';

function Products() {
  const dispatch = useDispatch();

  // Ürünlerin verilerini redux'dan alıyoruz
  const ship = useSelector((state) => state.money.ship);
  const jet = useSelector((state) => state.money.jet);
  const car = useSelector((state) => state.money.car);
  const phone = useSelector((state) => state.money.phone);

  // Butona tıklanınca hangi ürünün adedini artıracağını belirten fonksiyon
  const handleAddButton = (productName) => {
    dispatch(addButton({ product: productName }));
  };
  const handleRemoveButton = (productName) => {
    dispatch(removeButton({ product: productName }));
  };

  return (
    <Box bg="main3" borderTop="1px"  borderBottom="1px" borderRight="2px" w="900px" textAlign="center" justifyContent="center" display="flex">
      {/* Product 1 */}
      <Box m="12px" border="1px" boxShadow="lg" height="230px">
        <Image src={foto} width="180px" height="150px" />
        <HStack m="8px" justifyContent="center">
          <Heading size="xs">{ship.title}</Heading>
          <Badge>{ship.money} TL</Badge>
        </HStack>
        <HStack m="13px" justifyContent="center">
          <Button onClick={() => handleRemoveButton("ship")} size="xs" bg="main">Sat</Button>
          <Text mb="75px" bg="white" w="20px">{ship.adet}</Text>
          <Button onClick={() => handleAddButton("ship")} size="xs" bg="main">Ekle</Button>
        </HStack>
      </Box>

      {/* Product 2 */}
      <Box m="12px" border="1px" boxShadow="lg" height="230px">
        <Image src={foto1} width="180px" height="150px" />
        <HStack m="8px" justifyContent="center">
          <Heading size="xs">{jet.title}</Heading>
          <Badge>{jet.money} TL</Badge>
        </HStack>
        <HStack m="13px" justifyContent="center">
        <Button onClick={() => handleRemoveButton("jet")} size="xs" bg="main">Sat</Button>
          <Text mb="75px" bg="white" w="20px">{jet.adet}</Text>
          <Button onClick={() => handleAddButton("jet")} size="xs" bg="main">Ekle</Button>
        </HStack>
      </Box>

      {/* Product 3 */}
      <Box m="12px" border="1px" boxShadow="lg" height="230px">
        <Image src={foto2} width="180px" height="150px" />
        <HStack m="8px" justifyContent="center">
          <Heading size="xs">{car.title}</Heading>
          <Badge>{car.money} TL</Badge>
        </HStack>
        <HStack m="13px" justifyContent="center">
        <Button onClick={() => handleRemoveButton("car")} size="xs" bg="main">Sat</Button>
          <Text mb="75px" bg="white" w="20px">{car.adet}</Text>
          <Button onClick={() => handleAddButton("car")} size="xs" bg="main">Ekle</Button>
        </HStack>
      </Box>

      {/* Product 4 */}
      <Box m="12px" border="1px" boxShadow="lg" height="230px">
        <Image src={foto3} width="180px" height="150px" />
        <HStack m="8px" justifyContent="center">
          <Heading size="xs">{phone.title}</Heading>
          <Badge>{phone.money} TL</Badge>
        </HStack>
        <HStack m="13px" justifyContent="center">
        <Button onClick={() => handleRemoveButton("phone")} size="xs" bg="main">Sat</Button>
          <Text mb="75px" bg="white" w="20px">{phone.adet}</Text>
          <Button onClick={() => handleAddButton("phone")} size="xs" bg="main">Ekle</Button>
        </HStack>
      </Box>

    </Box>
  );
}

export default Products;
