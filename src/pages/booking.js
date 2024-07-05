import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import HeroPageTitle from '../components/HeroPageTitle';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);

  const times = Array.from({ length: 24 }, (_, i) => {
    const hour = 11 + Math.floor(i / 2);
    const minutes = i % 2 === 0 ? '00' : '30';
    const period = hour < 12 ? 'AM' : 'PM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:${minutes} ${period}`;
  });

  return (
    <>
      <Header />
      <HeroPageTitle title="Reserve a Table" />
      <Box maxW="600px" mx="auto" my="5em">
        <BookingForm
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          guests={guests}
          setGuests={setGuests}
          times={times}
        />
      </Box>
      <Footer />
    </>
  );
}
