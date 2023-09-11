import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Tasks from './Tasks';

const ToDos = () => {
  const [user, setUser] = useState('Nina');

  return (
    <Box padding={'20px'}>
      <Box>
        <Text fontSize={'2xl'} fontWeight={'semibold'}>
          Good Morning, {user} ♡
        </Text>
      </Box>
      <Box mt={'30px'}>
        <Tasks />
      </Box>
    </Box>
  );
};

export default ToDos;
