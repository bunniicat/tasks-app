import { Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  let currentTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let currentDate = date.toLocaleDateString();

  return (
    <Box bgColor={'whiteAlpha.300'}>
      <Flex justifyContent={'space-between'} pl={'10px'} pr={'20px'}>
        <HStack>
          <Box bgColor={''}>
            <IconButton aria-label='open menu' icon={<HamburgerIcon />} variant={'ghost'} />
          </Box>
          <Box bgColor={''}>
            <IconButton aria-label='open menu' icon={darkMode ? <SunIcon /> : <MoonIcon />} variant={'ghost'} />
          </Box>
        </HStack>
        <HStack>
          <Box>
            <Text color={'white'} fontWeight={'medium'}>
              {currentDate}
            </Text>
          </Box>
          <Box color={'white'} fontWeight={'medium'}>
            {currentTime}
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
