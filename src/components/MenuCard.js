import { Box, Flex, Text } from '@chakra-ui/react';

const specialMenu = [
  {
    image_src: '/images/greek-salad.jpg',
    title: 'Greek Salad',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '$12.99',
  },
  {
    image_src: '/images/bruchetta.svg',
    title: 'Bruchetta',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '$5.99',
  },
  {
    image_src: '/images/lemon-dessert.jpg',
    title: 'Lemon Dessert',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: '$5.00',
  },
];

export default function MenuCard() {
  return (
    <Flex justifyContent="space-between">
      {specialMenu.map((menu) => (
        <Box w="30%">
          <img src={menu.image_src} alt={menu.title} className="img__menu" />
          <Flex justifyContent="space-between">
            <h3>{menu.title}</h3>
            <Text color="#EE9972">{menu.price}</Text>
          </Flex>
          <p>{menu.description}</p>
        </Box>
      ))}
    </Flex>
  );
}
