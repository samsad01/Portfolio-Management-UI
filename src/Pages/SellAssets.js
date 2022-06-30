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
  Checkbox,
  Input,
  TableContainer,
  TableCaption,
  Thead,
  Table,
  Th,
  Tr,
  Tbody,
  Td,
  Tfoot,

} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

function SellAssets() {
  let navigate = useNavigate();
  return (
    <Box >
            <nav>
          <Flex minWidth='70' alignItems='center' gap='2' paddingTop={5} paddingLeft={5} paddingBottom={3} bg={useColorModeValue('grey.200', 'gray.900')}>
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
      </Flex >
          </nav>
      <Flex paddingTop={10} paddingLeft={500} paddingRight={300} paddingBottom={50} backgroundColor={"purple.100"}>
      <Box  border={"1px"} borderRadius={'lg'} backgroundColor={"white"}>
        <VStack>
          <Box>
            <Image 
              src='./img4.jpeg'
              boxSize='420px'
            />
          </Box>
          <Box paddingBottom={5}>
          <Text fontSize='25px' paddingLeft={120}>Sell Assets</Text>
          <Text paddingBottom={3}  paddingLeft={20}>Select the assets you want to sell</Text>
          <VStack>
            <Box>
            <TableContainer >
            <Table variant='simple' size={"sm"}>
              
              <Thead>
                <Tr>
                  <Th>Asset Name</Th>
                  <Th>Units to be sold</Th>
                  
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>   <Checkbox  borderColor={'black'} paddingRight={20}>ABC</Checkbox></Td>
                  <Td>   <Input type={'number'} borderColor={'black'} /></Td>
                 
                </Tr>
                <Tr>
                  <Td>   <Checkbox  borderColor={'black'} paddingRight={20}>AMZ</Checkbox></Td>
                  <Td>   <Input type={'number'} borderColor={'black'} /></Td>
                 
                </Tr>
                <Tr>
                  <Td>   <Checkbox  borderColor={'black'} paddingRight={20}>AXIS</Checkbox></Td>
                  <Td>   <Input type={'number'} borderColor={'black'} /></Td>
                 
                </Tr>
                <Tr>
                  <Td>   <Checkbox borderColor={'black'} paddingRight={20}>GGL</Checkbox></Td>
                  <Td>   <Input type={'number'} borderColor={'black'} /></Td>
                 
                </Tr>
                <Tr>
                  <Td>   <Checkbox  borderColor={'black'} paddingRight={20}>SBI</Checkbox></Td>
                  <Td>   <Input type={'number'} borderColor={'black'} /></Td>
                 
                </Tr>
              </Tbody>
              
            </Table>
              </TableContainer>
            </Box>
            <Button
             colorScheme='blue' variant='solid'
            // outlineColor={'blackAlpha.400'}
             onClick={()=>{
              navigate('/CalculatePortfolio');
            }}
            >
              Networth
            </Button>
          </VStack>
          
          </Box>
          </VStack>
      </Box>
      </Flex>
    </Box>
  )
}

export default SellAssets