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
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

function SellAssets() {
  let navigate = useNavigate();
  return (
    <Box>
      <Flex paddingTop={10} paddingLeft={500} paddingRight={300} paddingBottom={50}>
      <Box  bg='purple.100'>
        <VStack>
          <Box>
            <Image 
              src='./img4.jpeg'
              boxSize='400px'
            />
          </Box>
          <Box paddingBottom={5}>
          <Text fontSize='25px' paddingLeft={120}>Sell Assets</Text>
          <Text paddingBottom={3}  paddingLeft={20}>Select the assets you want to sell</Text>
          <VStack>
            <Box>
            <HStack paddingBottom={3}>
              <Text>Asset Name</Text>
              <Spacer/>
              <Text>Units to be sold</Text>
            </HStack>
            <HStack paddingBottom={1}>
            <Checkbox iconColor='blue.900' colorScheme='white' borderColor={'black'} paddingRight={20}>ABC</Checkbox>
            <Spacer />
            <Input type={'number'} borderColor={'black'} />
            </HStack>
            <HStack paddingBottom={1}>
            <Checkbox iconColor='blue.900' colorScheme='white' borderColor={'black'} paddingRight={19}>AMZ</Checkbox>
            <Spacer paddingRight={14}/>
            <Input type={'number'} borderColor={'black'}/>
            </HStack>
            <HStack paddingBottom={1}>
            <Checkbox iconColor='blue.900' colorScheme='white' borderColor={'black'} paddingRight={20}>AXIS</Checkbox>
            <Spacer/>
            <Input type={'number'} borderColor={'black'}/>
            </HStack>
            <HStack paddingBottom={1}>
            <Checkbox iconColor='blue.900' colorScheme='white' borderColor={'black'} paddingRight={20}>GGL</Checkbox>
            <Spacer/>
            <Input type={'number'} borderColor={'black'}/>
            </HStack>
            <HStack paddingBottom={2}>
            <Checkbox iconColor='blue.900' colorScheme='white' borderColor={'black'} paddingRight={20}>SBI</Checkbox>
            <Spacer/>
            <Input type={'number'} borderColor={'black'}/>
            </HStack>
            </Box>
            <Button
             colorScheme='gray' variant='solid'
             outlineColor={'blackAlpha.400'}
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