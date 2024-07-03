import { Box, Flex } from '@chakra-ui/react';
import MenuCard from './MenuCard';

export default function SpecialMenu() {
  return (
    <Box maxW="960px" mx="auto">
      <Box my="5em">
        <Flex justifyContent="space-between">
          <h2>Specials</h2>
          <a className="btn__cta" href="/menu">
            Online Menu
          </a>
        </Flex>
        <Flex mt="3em">
          <MenuCard />
        </Flex>
      </Box>
    </Box>
  );
}
