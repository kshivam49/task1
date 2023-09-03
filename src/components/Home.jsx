import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import img1 from '../assets/Screenshot_669 1.jpg'
import img2 from '../assets/Rectangle 400.png'
import img3 from '../assets/Vector 1.png'

const Home = () => {
  return (
    <Box bgColor={'#FFFFFF'}>
      <Container maxW={'full'} minH={'100vh'} p={'0'}>
        <Button zIndex={'1'} top={'32px'} right={'32px'} position={'absolute'} p={'3px 26px  3px 26px'} color={'#FFFFFF'} bgColor={'transparent'} gap={'10px'} borderRadius={'21px'} border={'1px'} borderColor={'#FFFFFF'}>Get in Touch</Button>
        <Stack h={'full'} direction={['column-reverse','row']}>
          <VStack maxW={['full','50%']} alignItems={['center','flex-start']} p={'12'} >
            <Image src={img1} display={['none','flex']}/>
            <Heading textAlign={['center','start']} marginTop={'8'} fontFamily={'sans-serif'} fontWeight={'700'} fontSize={'69px'} lineHeight={'69px'} paddingTop={'16'} w={'fit-content'} color={'#0E2368'}>Discover the <Box as='span' color={'#E23744'}>Best</Box> Food and Drinks</Heading>
            <Text fontFamily={'sans-serif'} textAlign={['center','start']} fontWeight={'400'} fontSize={'16.44px'} lineHeight={'27.41px'} color={'#444957'} w={'fit-content'} py={'4'}>Naturally made Healthcare Products for the better care & support of your body.</Text>
            <Button bgColor={'#E23744'} color={'white'} gap={'7px'} p={'14px 34px 14px 34px'} borderRadius={'34px'}>Explore Now!</Button>
          </VStack>
          <VStack position={'relative'} >
            <Image src={img2} minW={'full'} minH={'100vh'} borderRadius={'0px 0px 0px 199px'}/>
            <Image position={'absolute'}  src={img3} minW={'full'} minH={'100vh'} />
            
          </VStack>
        </Stack>

      </Container>
    </Box>
  )
}

export default Home