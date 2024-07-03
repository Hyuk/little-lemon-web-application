import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<h1>Menu Page</h1>} />
      <Route path="/reservations" element={<h1>Reservations Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/login" element={<h1>Login Page</h1>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
