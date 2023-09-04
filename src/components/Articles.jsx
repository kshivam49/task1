import { Box, Button, Container, HStack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import img1 from '../assets/grilled-tomatoes-1-846x846 1.png'
import img2 from '../assets/meal-prep-ideas-846x846 1.png'
import img3 from '../assets/meal-prep-ideas-846x846 1 (1).png'
import img4 from '../assets/grilled-tomatoes-1-846x846 1 (1).png'
import img5 from '../assets/meal-prep-ideas-846x846 1 (2).png'
import img6 from '../assets/meal-prep-ideas-846x846 1 (3).png'

const itemsPerPage = 3;

const data = [
  { 
    img:img1,
    id:1,
    title:'Grilled  Tomatoes at Home',
    description:'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',
  },
  {
    id:2,
    img:img2,
    title:'Snacks for Travel',
    description:'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',
  },
  {
    id:3,
    img:img3,
    title:'Post-workout Recipes',
    description:'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',
  },
  {
    id:4,
    img:img4,
    title:'How To Grill Corn',
    description:'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',

  },
  {
    id:5,
    img:img5,
    title:'Crunchwrap Supreme',
    description:'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',

  },
  {
    id:6,
    img:img6,
    title:'Broccoli Cheese Soup',
    description:'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard...',

  },
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Box p={'8'}>
      <Container maxW={'full'} minH={'90vh'} p={'4'}>
        <Heading py={'8'} color={'#0E2368'} fontFamily={'sans-serif'} fontWeight={'600'} fontSize={'56px'} lineHeight={'42px'} >Latest Articles</Heading>
        <SimpleGrid columns={['1','3']} spacing={10}>
          {currentData.map((item) => (
            <Box key={item.id} borderRadius={'21px'} borderWidth="1px" p="6">
              <Image borderRadius={'21px'} src={item.img} />
              <Heading py={'4'} color={'#0E2368'} fontFamily={'sans-serif'} fontWeight={'700'} fontSize={'21px'} lineHeight={'27px'} >{item.title}</Heading>
              <Text paddingBottom={'4'} color={'#444957'} fontFamily={'sans-serif'} fontWeight={'400'} fontSize={'15px'} lineHeight={'27px'} >{item.description}</Text>
              <Button p={'3px 26px 3px 26px'} gap={'10px'} borderRadius={'21px'} color={'#424961'} border={'1px'} borderColor={'#424961'} bgColor={'white'}>Read More</Button>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      
      
      <HStack justifyContent={'center'} p={'8'}>
        <Button
          color={'#424961'} bgColor={'white'} border={'1px'} borderColor={'#424961'} borderRadius={'5px'}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >{'<'}</Button>
        <Text color={'#424961'} fontFamily={'sans-serif'} fontWeight={'400'} fontSize={'22px'} lineHeight={'27.22px'}>{currentPage}/{totalPages}</Text>
        <Button
          color={'#424961'} bgColor={'white'} border={'1px'} borderColor={'#424961'} borderRadius={'5px'}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </Button>
      </HStack>

    </Box>
  )
}

export default Articles