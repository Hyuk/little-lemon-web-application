import React from 'react';
import { Button, Select, FormControl, FormLabel } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

export default function BookingForm({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  times,
}) {
  const navigate = useNavigate();

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
