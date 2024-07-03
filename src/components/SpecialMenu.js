import { Box, Flex } from '@chakra-ui/react';

export default function SpecialMenu() {
  return (
    <Box maxW="960px" mx="auto">
      <Flex>
        <h2>Specials</h2>
        <a className="btn__cta" href="/menu">
          Online Menu
        </a>
      </Flex>
    </Box>
  );
}
