import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import ToDos from './ToDos';

const AppContainer = () => {
  return (
    <Box rounded={'xl'} border={'1px'} borderColor={'gray.50'} mt={'60px'} ml={'30px'} mr={'30px'}>
      <NavBar />
      <ToDos />
    </Box>
  );
};

export default AppContainer;
