import { Box, Flex } from '@chakra-ui/react';

export default function HeroPageTitle({ title }) {
  return (
    <Box w="100%" h="150px" backgroundColor="#495E57">
      <Flex w="960px" h="150px" mx="auto" alignItems="center">
        <Box className="hero-text">
          <h1>{title}</h1>
        </Box>
      </Flex>
    </Box>
  );
}
