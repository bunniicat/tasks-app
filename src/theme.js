import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      //body
      body: {
        bg: 'linear-gradient(to right, #9175a7, #f5afd9);',
        color: '#2F2F2F',
      },
    },
  },
});

export default theme;
