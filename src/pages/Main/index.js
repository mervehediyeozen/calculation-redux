import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Money from '../../components/Money'
import Products from '../../components/Products'
import Result from '../../components/Result'

function Main() {
  return (
    <Flex 
      bg="main2" 
      textAlign="center" 
      alignItems="center" 
      justifyContent="center" 
      width="100vw" 
      direction="column"
    >
      <Box width="900px" bg="main"  border="2px"  >
        <Money />
        <Products />
        <Result/>
      </Box>
    </Flex>
  )
}

export default Main
