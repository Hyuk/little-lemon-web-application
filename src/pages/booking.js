import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import HeroPageTitle from '../components/HeroPageTitle';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

export default function Booking() {
  return (
    <>
      <Header />
      <HeroPageTitle title="Reservation" />
      <Box maxW="600px" mx="auto" my="5em">
        <BookingForm />
      </Box>
      <Footer />
    </>
  );
}
