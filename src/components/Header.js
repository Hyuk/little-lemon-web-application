import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Header() {
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
                  <Link
                    to="about"
                    preventScrollReset={true}
                    className="smooth-scroll"
                  >
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
