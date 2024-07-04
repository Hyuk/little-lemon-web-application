import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
        nav.classList.add('scrolled');
        navLinks.forEach((link) => {
          link.classList.add('scrolled');
        });
      } else {
        header.classList.remove('scrolled');
        nav.classList.remove('scrolled');
        navLinks.forEach((link) => {
          link.classList.remove('scrolled');
        });
      }
    });
  }, []);
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/reservation">Reservation</Link>
                </li>
                <li>
                  <Link to="#about" preventScrollReset={true}>
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
      </Flex>
    </header>
  );
}
