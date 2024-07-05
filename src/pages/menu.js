import Header from '../components/Header';
import HeroPageTitle from '../components/HeroPageTitle';
import Footer from '../components/Footer';
import MenuCard from '../components/MenuCard';
import { Box } from '@chakra-ui/react';

export default function Menu() {
  return (
    <>
      <Header />
      <HeroPageTitle title="Menu" />
      <Box maxW="980px" mx="auto" py="5em">
        <MenuCard />
      </Box>
      <Footer />
    </>
  );
}
