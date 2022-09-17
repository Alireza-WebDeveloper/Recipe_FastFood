const dataNow = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: 'short',
}).format(new Date());

const dataSlider = [
  {
    url: 'https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg?cs=srgb&dl=pexels-pablo-macedo-845798.jpg&fm=jpg',
    title: 'the delicious',
    name: 'pizza',
    date: dataNow,
  },
  {
    url: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?cs=srgb&dl=pexels-engin-akyurt-1438672.jpg&fm=jpg',
    title: 'the delicious',
    name: 'pasta',
    date: dataNow,
  },
  {
    url: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg',
    title: 'the delicious',
    name: 'hamburger',
    date: dataNow,
  },
  {
    url: 'https://images.pexels.com/photos/2067626/pexels-photo-2067626.jpeg?cs=srgb&dl=pexels-marta-dzedyshko-2067626.jpg&fm=jpg',
    title: 'the delicious',
    name: 'bread',
    date: dataNow,
  },
  {
    url: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?cs=srgb&dl=pexels-julie-aagaard-2097090.jpg&fm=jpg',
    title: 'the delicious',
    name: 'salad',
    date: dataNow,
  },
  {
    url: 'https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?cs=srgb&dl=pexels-leigh-patrick-298217.jpg&fm=jpg',
    title: 'the delicious',
    name: 'pastry',
    date: dataNow,
  },
  {
    url: 'https://images.pexels.com/photos/9502105/pexels-photo-9502105.jpeg?cs=srgb&dl=pexels-fer-martinez-gonzalez-9502105.jpg&fm=jpg',
    title: 'the delicious',
    name: 'ketchup',
    date: dataNow,
  },
];

export default dataSlider;
