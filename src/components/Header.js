import {
  Box,
  Flex,
  Image,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const scrollLinks = document.querySelectorAll('.smooth-scroll');

    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        console.log(`Scrolling to ${targetId}`);
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Adjust offset for fixed header
          behavior: 'smooth',
        });
      } else {
        console.error(`Element with ID ${targetId} not found.`);
      }
    };

    for (const link of scrollLinks) {
      link.addEventListener('click', handleClick);
    }

    // Clean up event listeners on unmount
    return () => {
      for (const link of scrollLinks) {
        link.removeEventListener('click', handleClick);
      }
    };
  }, []);
  return (
    <header>
      <Flex
        maxW="960px"
        h="100px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
        p={{ base: '0 1em', lg: '0' }}>
        <Box>
          <Link to="/">
            <Image src="/images/logo2.svg" alt="Little Lemon Restaurant" />
          </Link>
        </Box>
        <Box display={{ base: 'none', md: 'flex' }} alignSelf="right">
          <nav>
            <ul>
              <Flex gap="24px">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/booking">Reservation</Link>
                </li>
                <li>
                  <Link
                    to="about"
                    preventScrollReset={true}
                    className="smooth-scroll">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </Flex>
            </ul>
          </nav>
        </Box>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <nav>
                <ul>
                  <li>
                    <Link to="/" onClick={onClose}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/menu" onClick={onClose}>
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="/reservation" onClick={onClose}>
                      Reservation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      onClick={onClose}
                      preventScrollReset={true}
                      className="smooth-scroll">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" onClick={onClose}>
                      Login
                    </Link>
                  </li>
                </ul>
              </nav>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </header>
  );
}
