import { Box, Flex } from '@chakra-ui/react';

const testimonials = [
  {
    name: 'Iron Man',
    rating: 5,
    review:
      "I love the food here! It's always fresh and delicious. I highly recommend the chicken and waffles.",
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Hulk',
    rating: 4,
    review:
      "I love the food here! It's always fresh and delicious. I highly recommend the chicken and waffles.",
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Thor',
    rating: 5,
    review:
      "I love the food here! It's always fresh and delicious. I highly recommend the chicken and waffles.",
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Black Widow',
    rating: 4,
    review:
      "I love the food here! It's always fresh and delicious. I highly recommend the chicken and waffles.",
    image: 'https://via.placeholder.com/150',
  },
];

function TestimonialCard({ name, rating, review, image }) {
  return (
    <Box>
      <Flex justifyContent="center">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </Flex>
      <Flex justifyContent="center">
        <img src="https://via.placeholder.com/150" alt="Customer" />
      </Flex>
      <Flex justifyContent="center">
        <p>Jane Doe</p>
      </Flex>

      <Flex justifyContent="center">
        <p>
          "I love the food here! It's always fresh and delicious. I highly
          recommend the chicken and waffles."
        </p>
      </Flex>
    </Box>
  );
}

export default function Testimonial() {
  return (
    <Box maxW="960px" mx="auto">
      <Box textAlign="center">
        <h2>Testimonial</h2>
      </Box>
      <Flex justifyContent="space-between" gap="16px">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Flex>
    </Box>
  );
}
