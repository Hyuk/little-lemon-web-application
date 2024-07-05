import React, { useState } from 'react';
import { Button, Select, FormControl, FormLabel } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

export default function BookingForm() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const navigate = useNavigate();

  const times = Array.from({ length: 24 }, (_, i) => {
    const hour = 11 + Math.floor(i / 2);
    const minutes = i % 2 === 0 ? '00' : '30';
    const period = hour < 12 ? 'AM' : 'PM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:${minutes} ${period}`;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = JSON.parse(localStorage.getItem('userInfo')).firstName;
    navigate('/confirmation', { state: { firstName, date, time, guests } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl mb={4}>
        <FormLabel>Select Date:</FormLabel>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Select Time:</FormLabel>
        <Select value={time} onChange={(e) => setTime(e.target.value)}>
          {times.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Number of Guests:</FormLabel>
        <Select value={guests} onChange={(e) => setGuests(e.target.value)}>
          {Array.from({ length: 9 }, (_, i) => i + 2).map((guest) => (
            <option key={guest} value={guest}>
              {guest}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" colorScheme="yellow" width="100%">
        Confirm Reservation
      </Button>
    </form>
  );
}
