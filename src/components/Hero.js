import { Box, Button, Flex, Text } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box w="100%" h="250px" backgroundColor="#495E57">
      <Flex w="960px" mx="auto" justifyContent="space-between">
        <Box className="hero-text" w="250px">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <Text color="white">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
          <Button>Reserve a Table</Button>
        </Box>
        <Box className="hero-image">
          <img
            width="200px"
            src="/images/restauranfood.jpg"
            alt="Little Lemon Restaurant"
          />
        </Box>
      </Flex>
    </Box>
  );
}
