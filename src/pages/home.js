import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import SpecialMenu from '../components/SpecialMenu';
import Testimonial from '../components/Testimonial';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <SpecialMenu />
        <Testimonial />
        <About />
      </main>
      <Footer />
    </>
  );
}
