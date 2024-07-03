import { Box, Grid } from '@chakra-ui/react';

const specialMenu = [
  {
    image_src: '/images/greek-salad.jpg',
    title: 'Special Menu 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, odio nec lacinia fermentum, felis nisl ultricies dui, at lacinia nunc nisl vel eros.',
  },
  {
    image_src: '/images/bruchetta.svg',
    title: 'Special Menu 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, odio nec lacinia fermentum, felis nisl ultricies dui, at lacinia nunc nisl vel eros.',
  },
  {
    image_src: '/images/lemon-dessert.jpg',
    title: 'Special Menu 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, odio nec lacinia fermentum, felis nisl ultricies dui, at lacinia nunc nisl vel eros.',
  },
];

export default function MenuCard() {
  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="8px">
      {specialMenu.map((menu) => (
        <Box>
          <img src={menu.image_src} alt={menu.title} className="img__menu" />
          <h3>{menu.title}</h3>
          <p>{menu.description}</p>
        </Box>
      ))}
    </Grid>
  );
}
