import React from 'react'
import {Box, Heading , Image,  Center , Text} from '@chakra-ui/react'
import {useSelector} from 'react-redux'
import foto from '../../images/bill.jpg'

function Money() {
    const money = useSelector((state) => state.money.mainMoney) ; 
  return (

        <Box bg="main4" height="250px" textAlign="center" justifyContent="center" display="flex" flexDirection="column" >
          <Heading fontFamily="monospace" size="md" color="blackAlpha.700" textDecoration="underline"> Neler Alabilirsin? </Heading>
            <Box mt="10px" textAlign="center" justifyContent="center" display="flex"  >
                <Image src={foto} rounded="full" height="140px" w="160px" />
            </Box>
            <Center>
            <Box mt="15px" bg="blackAlpha.200" w="160px"  border="1px" justifyContent="center" alignItems="center" textAlign="center" >
              <Text fontFamily="heading" color="blackAlpha.700"fontSize="20px"  fontWeight="bold"> {money} </Text>
             </Box>
             </Center>
        </Box>
   
  )
}

export default Money