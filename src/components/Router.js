import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import Menu from '../pages/menu';
import Booking from '../pages/booking';
import Login from '../pages/login';
import Confirmation from '../pages/confirmation';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
