import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <Box w="100%" h="300px" backgroundColor="#495E57">
      <Flex w="960px" mx="auto" justifyContent="space-between">
        <Flex alignItems="center">
          <Box className="hero-text" w="400px" h="300px">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <Text color="white" my="24px">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
            <Link to="/reservation" className="btn__cta">
              Reserve a Table
            </Link>
          </Box>
        </Flex>
        <Box className="hero-image" mt="40px">
          <img
            width="200px"
            src="/images/restauranfood.jpg"
            alt="Little Lemon Restaurant"
            className="img__hero"
          />
        </Box>
      </Flex>
    </Box>
  );
}
