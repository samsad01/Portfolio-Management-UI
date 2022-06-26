import React from 'react'
import {
  Flex,
  Box,
  Spacer,
  ButtonGroup,
  Heading,
  Button,
  useColorModeValue,
  HStack,
  Image,
  VStack,
  Center,
  Text,
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'


function CalculatePortfolio() {
  let navigate = useNavigate();
  return (
    <Box>
    <nav>
    <Flex minWidth='70' alignItems='center' gap='2' paddingTop={5} paddingLeft={5} paddingBottom={3} bg={useColorModeValue('gray.100', 'gray.900')}>
<Box p='2'>
  <Heading size='md'>Portfolio Manager</Heading>
</Box>
<Spacer />
<ButtonGroup gap='2' paddingRight={10}>
  <Button colorScheme='teal'
  onClick={()=>{
    navigate('/PortfolioManager');
  }}
  >
    Home
  </Button> 
</ButtonGroup>
</Flex>
    </nav>
    <Flex paddingTop={10} paddingLeft={500} paddingRight={300}>
      <Box paddingBottom={5} bg='purple.100'>
        <VStack>
          <Box>
            <Image 
              src='./img3.jpeg'
              boxSize='400px'
            />
          </Box>
          <Box>
          <Text fontSize='25px'>Calculate Networth</Text>
          <Text>Your Networth is ?</Text>
          
          </Box>
          </VStack>
      </Box>
      </Flex>
      </Box>
    

  )
}

export default CalculatePortfolio