import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <Box maxW="980px" mx="auto" p="5em">
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems={{ base: 'center', md: 'start' }}
          rowGap={{ base: '2em', md: '0' }}
        >
          <Box>
            <Image src="/images/logo2.svg" alt="Little Lemon Restaurant" />
          </Box>
          <Box>
            <Flex flexDirection="column" alignItems={{ base: 'center' }}>
              <h3>Navigation</h3>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/reservation">Reservation</Link>
              <Link to="/#about">About</Link>
              <Link to="/login">Login</Link>
            </Flex>
          </Box>
          <Box textAlign="center">
            <h3>Contact</h3>
            <Flex flexDirection="column" alignItems={{ base: 'center' }}>
              <Text>Address</Text>
              <Text>Phone Number</Text>
              <Text>Email</Text>
            </Flex>
          </Box>
          <Box textAlign="center">
            <h3>Social Media Links</h3>
            <Flex flexDirection="column" alignItems={{ base: 'center' }}>
              <Text>Facebook</Text>
              <Text>Instagram</Text>
              <Text>Twitter/X</Text>
              <Text>Youtube</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex
          h="100px"
          justifyContent={{ base: 'center', md: 'right' }}
          alignItems={{ base: 'center', md: 'end' }}
        >
          <p>&copy; 2024 Restaurant</p>
        </Flex>
      </Box>
    </footer>
  );
}
