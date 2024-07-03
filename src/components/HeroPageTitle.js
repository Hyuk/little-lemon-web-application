import { Box, Flex } from '@chakra-ui/react';

export default function HeroPageTitle({ title }) {
  return (
    <Box w="100%" h="250px" backgroundColor="#495E57">
      <Flex w="960px" mx="auto" justifyContent="space-between">
        <Box className="hero-text" w="250px">
          <h1>{title}</h1>
        </Box>
      </Flex>
    </Box>
  );
}
