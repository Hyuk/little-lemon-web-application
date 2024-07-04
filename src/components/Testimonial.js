import { Box, Flex } from '@chakra-ui/react';

const testimonials = [
  {
    name: 'Iron Man',
    rating: 5,
    review:
      'I thought I knew luxury, but Little Lemon Restaurant takes it to another level. The lemon-infused steak? Simply Stark-tacular. Jarvis, remind me to come back here.',
    image: 'iron-man.jpg',
  },
  {
    name: 'Hulk',
    rating: 4,
    review:
      "Even Hulk's rage can't resist the deliciousness of Little Lemon's veggie burger. It's Hulk-smashingly good! Banner approved.",
    image: 'hulk.jpg',
  },
  {
    name: 'Thor',
    rating: 5,
    review:
      "By Odin's beard, the food here is divine! The lamb shank reminded me of a feast in Valhalla. Little Lemon Restaurant is worthy!",
    image: 'thor.jpg',
  },
  {
    name: 'Black Widow',
    rating: 4,
    review:
      "Stealthy service, killer cuisine. The sushi was so good, it should be classified. I'll be back for more covert ops dining at Little Lemon.",
    image: 'black-widow.jpg',
  },
];

function TestimonialCard({ name, rating, review, image }) {
  return (
    <Flex
      maxW={{ base: '100%', md: '23%' }}
      flexDirection="column"
      mx={{ base: 'auto', md: '0' }}
      backgroundColor="#FFFFFF"
      borderRadius="8px"
      p="16px"
      gap="8px"
    >
      <Flex justifyContent="center">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </Flex>
      <Flex justifyContent="center">
        <Box
          w="150px"
          h="150px"
          backgroundImage={`/images/${image}`}
          borderRadius="50%"
          backgroundSize={'cover'}
          backgroundPosition={'center'}
        />
      </Flex>
      <Flex justifyContent="center">
        <p>{name}</p>
      </Flex>
      <Flex justifyContent="center" p="8px">
        <p>{review}</p>
      </Flex>
    </Flex>
  );
}

export default function Testimonial() {
  return (
    <Box w="100%" backgroundColor="#EEEEEE" p="5em">
      <Box maxW="960px" mx="auto">
        <Box textAlign="center" pb="3em">
          <h2>Testimonial</h2>
        </Box>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          gap="24px"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
