import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <Box maxW="980px" mx="auto" p="5em">
        <Flex justifyContent="space-between">
          <Box>
            <Image src="/images/logo2.svg" alt="Little Lemon Restaurant" />
          </Box>
          <Box>
            <Flex flexDirection="column">
              <h3>Navigation</h3>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/reservation">Reservation</Link>
              <Link to="/#about">About</Link>
              <Link to="/login">Login</Link>
            </Flex>
          </Box>
          <Box>
            <h3>Contact</h3>
            <Flex flexDirection="column">
              <Text>Address</Text>
              <Text>Phone Number</Text>
              <Text>Email</Text>
            </Flex>
          </Box>
          <Box>
            <h3>Social Media Links</h3>
            <Flex flexDirection="column">
              <Text>Facebook</Text>
              <Text>Instagram</Text>
              <Text>Twitter/X</Text>
              <Text>Youtube</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex h="100px" justifyContent="right" alignItems="end">
          <p>&copy; 2024 Restaurant</p>
        </Flex>
      </Box>
    </footer>
  );
}
