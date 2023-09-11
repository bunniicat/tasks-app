import * as React from 'react';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import DashboardPage from './Pages/DashboardPage';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DashboardPage />
    </ChakraProvider>
  );
}

export default App;
