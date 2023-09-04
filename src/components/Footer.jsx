import { Box, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import img1 from '../assets/Screenshot_669 1.jpg'
import {AiFillInstagram, AiFillTwitterCircle, AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'#F8F8F8'} minH={'40'} p={'16'}>
      <Stack direction={['column','row']} display={'flex'} justifyContent={'space-around'}>
        <VStack paddingBottom={'4'}>
        <Image src={img1} />
        </VStack>

        <VStack paddingBottom={'4'} alignItems={'start'} maxW={'300px'}>
          <Heading fontFamily={'sans-serif'} fontWeight={'600'} fontSize={'18.84px'} lineHeight={'27.22px'} color={'#0E2368'}>Contact Us</Heading>
          <Text fontFamily={'sans-serif'} fontWeight={'400'} fontSize={'14.66px'} lineHeight={'23.03px'} color={'#646874'}>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</Text>
          <Text fontFamily={'sans-serif'} fontWeight={'400'} fontSize={'14.66px'} lineHeight={'23.03px'} color={'#646874'}>example2020@gmail.com</Text>
          <Text fontFamily={'sans-serif'} textAlign={'center'} fontWeight={'400'} fontSize={'14.66px'} lineHeight={'23.03px'} color={'#646874'}>(904) 443-0343</Text>
        </VStack>

        <VStack paddingBottom={'4'} alignItems={'start'}>
          <Heading fontFamily={'sans-serif'} fontWeight={'600'} fontSize={'18.84px'} lineHeight={'27.22px'} color={'#0E2368'}>More</Heading>
          <Text fontFamily={'sans-serif'} fontWeight={'400'} fontSize={'14.66px'} lineHeight={'27.22px'} color={'#646874'}>About Us</Text>
          <Text fontFamily={'sans-serif'} fontWeight={'400'} fontSize={'14.66px'} lineHeight={'27.22px'} color={'#646874'}>Products</Text>
          <Text fontFamily={'sans-serif'} fontWeight={'400'} fontSize={'14.66px'} lineHeight={'27.22px'} color={'#646874'}>Career</Text>
          <Text fontFamily={'sans-serif'} fontWeight={'400'} fontSize={'14.66px'} lineHeight={'27.22px'} color={'#646874'}>Contact Us</Text>
        </VStack>
        
        <Stack paddingBottom={'4'} direction={['column-reverse','column']} justifyContent={'space-between'}>
          <Stack alignItems={'center'}>
            <Heading color={'#0E2368'} fontFamily={'sans-serif'} fontWeight={'600'} fontSize={'19px'} lineHeight={'27px'} display={['none','flex']}>Social Links</Heading>
            <HStack>
              <AiFillInstagram color='#0E2368'/>
              <AiFillTwitterCircle color='#0E2368' />
              <AiFillFacebook color='#0E2368'/>
            </HStack>
          </Stack>
          <Text textAlign={'center'} fontFamily={'sans-serif'} fontWeight={'400'} fontSize={'14.66px'} lineHeight={'25.12px'} color={'#828B9C'}>© 2022 Food Truck Example</Text>
        </Stack>
          

      </Stack>

    </Box>
  )
}

export default Footer