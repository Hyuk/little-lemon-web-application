import { Box, Flex, Text, Image } from '@chakra-ui/react';

export default function About() {
  return (
    <Box id="about" maxW="980px" mx="auto">
      <Flex>
        <Box>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <Text>
            Duis quis pariatur ullamco nulla irure laborum occaecat non
            voluptate dolore quis excepteur non ipsum. <br />
            Occaecat est dolor dolore aute eiusmod sint eu incididunt duis ad.
            Ipsum et laborum est sit Lorem qui consectetur ipsum veniam laborum
            anim.
          </Text>
        </Box>
        <Box position="relative">
          <Image
            width="200px"
            src="/images/restaurant.jpg"
            alt="Little Lemon Restaurant"
          />
          <Image
            width="200px"
            src="/images/restaurant.jpg"
            alt="Little Lemon Restaurant"
          />
        </Box>
      </Flex>
    </Box>
  );
}
