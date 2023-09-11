import { IconButton, Flex, Box, Text, HStack, Card, CardBody, Heading, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { AddIcon } from '@chakra-ui/icons';

const Tasks = () => {
  const [addedTasks, setAddedTasks] = useState(false);
  return (
    <>
      <Flex>
        <HStack>
          <Box>
            <Text fontSize={'large'} fontWeight={'medium'}>
              Tasks for today
            </Text>
          </Box>
          <Box>
            <IconButton
              icon={<AddIcon boxSize={'2.5'} />}
              variant={'ghost'}
              bg={'#2F2F2F'}
              w={'40px'}
              height={'20px'}
              rounded={'xl'}
            />
          </Box>
        </HStack>
      </Flex>
      <Box mt={'20px'}>
        {addedTasks ? (
          <Box> added</Box>
        ) : (
          <Card bg={'whiteAlpha.300'} borderLeft={'15px solid #604977'}>
            <CardBody m={'auto'} textAlign={'center'}>
              <Heading size={'xs'} textTransform={'uppercase'}>
                No tasks added
              </Heading>
              <Button mt={'10px'} bg={'#2F2F2F'}>
                Add Task
              </Button>
            </CardBody>
          </Card>
        )}
      </Box>
    </>
  );
};

export default Tasks;
