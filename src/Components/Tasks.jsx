import {
  IconButton,
  Flex,
  Box,
  Text,
  HStack,
  Card,
  CardBody,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalContent,
  Input,
  Textarea,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { AddIcon, TimeIcon } from '@chakra-ui/icons';
import { useEffectOnce } from 'usehooks-ts';

const Tasks = () => {
  const [addedTasks, setAddedTasks] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [taskTitleValue, setTaskTitleValue] = useState('');
  const [taskDescriptionValue, setTaskDescriptionValue] = useState('');
  const [taskDeadlineValue, setTaskDeadlineValue] = useState('');
  const [savedTasks, setSavedTasks] = useState([]);

  const handleTitleChange = (event) => {
    setTaskTitleValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setTaskDescriptionValue(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setTaskDeadlineValue(event.target.value);
  };

  const handleSubmit = () => {
    let newTaskObject = {
      title: taskTitleValue,
      description: taskDescriptionValue,
      deadline: taskDeadlineValue,
    };

    const myTaskArray = [...savedTasks, newTaskObject];
    window.localStorage.setItem('lsTasks', JSON.stringify(myTaskArray));
    let myTasks = window.localStorage.getItem('lsTasks');
    setSavedTasks(JSON.parse(myTasks));

    setAddedTasks(true);
    onClose();
  };

  useEffectOnce(() => {
    if ('lsTasks' in localStorage) {
      setAddedTasks(true);
      let myTasks = window.localStorage.getItem('lsTasks');
      setSavedTasks(JSON.parse(myTasks));
    }
  });

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
              onClick={onOpen}
              color={'white'}
            />
          </Box>
        </HStack>
      </Flex>
      <Box mt={'20px'}>
        {addedTasks ? (
          savedTasks.map((task) => (
            <Card bg={'whiteAlpha.300'} borderLeft={'15px solid #604977'} key={task.title} mb={'10px'}>
              <CardBody>
                <Heading size={'xs'} textTransform={'uppercase'}>
                  {task.title}
                </Heading>
                <Text>{task.description}</Text>
                <HStack>
                  <Text>
                    <TimeIcon />
                  </Text>
                  <Text mt={'4px'}>{task.deadline}</Text>
                </HStack>
              </CardBody>
            </Card>
          ))
        ) : (
          <Card bg={'whiteAlpha.300'} borderLeft={'15px solid #604977'}>
            <CardBody m={'auto'} textAlign={'center'}>
              <Heading size={'xs'} textTransform={'uppercase'}>
                No tasks added
              </Heading>
              <Button mt={'10px'} bg={'#2F2F2F'} onClick={onOpen} color={'white'}>
                Add Task
              </Button>
            </CardBody>
          </Card>
        )}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={'blackAlpha.700'} color={'white'}>
          <ModalHeader>Add New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input placeholder='Title' name='taskTitle' onChange={handleTitleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder='Description' name='taskDescription' onChange={handleDescriptionChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Deadline</FormLabel>
              <Input type='date' name='taskDeadline' onChange={handleDeadlineChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='ghost' mr={3} onClick={onClose} color={'red.300'}>
              Cancel
            </Button>
            <Button variant='solid' bg='linear-gradient(to right, #9175a7, #f5afd9)' onClick={handleSubmit}>
              Add New Task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Tasks;
