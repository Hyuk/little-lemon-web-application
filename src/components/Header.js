import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Flex
        maxW="960px"
        h="100px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Link to="/">
            <img src="/images/logo.svg" alt="Little Lemon Restaurant" />
          </Link>
        </Box>
        <Box display="flex" alignSelf="right">
          <nav>
            <ul>
              <Flex gap="24px">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>Reservations</li>
                <li>About</li>
                <li>Login</li>
              </Flex>
            </ul>
          </nav>
        </Box>
      </Flex>
    </header>
  );
}