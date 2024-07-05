import React from 'react';
import Header from '../components/Header';
import HeroPageTitle from '../components/HeroPageTitle';
import Footer from '../components/Footer';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

export default function Confirmation() {
  const location = useLocation();
  const { firstName, date, time, guests } = location.state || {};

  return (
    <>
      <Header />
      <HeroPageTitle title="Confirmation" />
      <Box maxW="600px" mx="auto" my="5em" textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Reservation Confirmed
        </Heading>
        <Text fontSize="lg">
          Hi {firstName}, your reservation for {guests} people on {time},{' '}
          {date.toLocaleDateString()} is completed.
        </Text>
      </Box>
      <Footer />
    </>
  );
}
