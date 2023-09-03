import { Box, Container, Stack, Heading, Image, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import img4 from '../assets/girl (lp).png'

const AboutUs = () => {
  const gradientStyle={background: 'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)',
};

  return (
    <Box bgColor={'#FFFFFF'} minH={'100vh'}>
      <Container  maxW={'full'} minH={'60vh'} p={'0'} marginTop={'20vh'} style={gradientStyle}>
        <Stack direction={'row'} >
          <VStack w={['0','50%']}>
            <Image minH={'60vh'} src={img4} display={['none','flex']}/>
          </VStack>
          <VStack maxW={['full','40%']} alignItems={['center','flex-start']} p={'8'} m={'8'} justifyContent={'center'}>
            <Heading color={'#0E2368'} fontSize={'45px'} lineHeight={'27px'} fontWeight={'600px'}>About Us</Heading>
            <Text textAlign={['center','start']} py={'6'} fontFamily={'sans-serif'} lineHeight={'27px'} fontWeight={'400'} fontSize={'15px'} color={'#444957'} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus sapiente, perferendis doloremque ipsa aut vero, molestias nesciunt aliquam, unde ipsum nobis? A veritatis architecto deleniti distinctio laudantium dolorum incidunt facilis.</Text>
            <Button bgColor={'#E23744'} color={'white'} gap={'10px'} p={'3px 26px 3px 26px'} borderRadius={'21px'}>Read More</Button>
          </VStack>
        </Stack>

      </Container>
    </Box>
  )
}

export default AboutUs