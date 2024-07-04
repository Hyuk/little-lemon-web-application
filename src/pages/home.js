import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import SpecialMenu from '../components/SpecialMenu';
import Testimonial from '../components/Testimonial';
import About from '../components/About';

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <SpecialMenu />
      <Testimonial />
      <About />
    </>
  );
}
