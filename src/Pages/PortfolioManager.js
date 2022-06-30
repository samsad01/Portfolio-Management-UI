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
import {useNavigate} from 'react-router-dom';


function PortfolioManager() {
  let navigate = useNavigate();
  return (
    
    <Box>
      <Flex minWidth='70' alignItems='center' gap='2' paddingTop={5} paddingLeft={5} paddingBottom={3} bg={useColorModeValue('gray.100', 'gray.900')}>
  <Box p='2'>
    <Heading size='md'>Portfolio Manager</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2' paddingRight={10}>
    <Button colorScheme='teal'
    onClick={()=>{
      navigate('/');
    }}
    >
      Logout
    </Button> 
  </ButtonGroup>
  </Flex>

     <HStack spacing={200} paddingLeft={200} paddingRight={200} paddingTop={25} alignContent="center">
      <Box paddingBottom={5} bg='purple.100' border={"1px"} borderRadius={'lg'}>
        <VStack>
          <Box>
            <Image 
              src='./img1.jpg'
              boxSize='400px'
            />
          </Box>
          <Box>
          <Text fontSize='25px' >Calculate Portfolio</Text>
          <Text paddingBottom={2}>Click to view my Portfolio</Text>
          <Button
           colorScheme='gray' variant='solid'
           
           outlineColor={'blackAlpha.400'}
          onClick={()=>{
            navigate('/CalculatePortfolio');
          }}
          >
            Calculate Portfolio
          </Button>
          </Box>
          </VStack>
      </Box>
      
      <Box paddingBottom={5} bg='purple.100' border={"1px"} borderRadius={'lg'}>
        <VStack>
          <Box>
            <Image 
              src='./img2.jpeg'
              boxSize='400px'
            />
          </Box>
          
          <Box display={"box"} alignContent={"center"}>
    
          <Text fontSize='25px' paddingLeft={7}>Sell</Text>
          <Text paddingBottom={2}>Click to sell a stock</Text>
          <Button
           colorScheme='gray' variant='solid'
           
           outlineColor={'blackAlpha.400'}
           onClick={()=>{
            navigate('/SellAssets');
          }}
          >
          Sell Stock
          </Button>
        
          </Box>
          
        </VStack>
      </Box >
     </HStack>

     </Box>
   
    
  
  )
}

export default PortfolioManager