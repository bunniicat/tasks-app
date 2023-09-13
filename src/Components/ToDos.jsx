import { Box, Text } from '@chakra-ui/react';
import Tasks from './Tasks';

const ToDos = () => {
  return (
    <Box padding={'20px'}>
      <Box>
        <Text fontSize={'2xl'} fontWeight={'semibold'}>
          Hello ♡
        </Text>
      </Box>
      <Box mt={'30px'}>
        <Tasks />
      </Box>
    </Box>
  );
};

export default ToDos;
