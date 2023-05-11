import './App.css'
import { useState } from 'react'
import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Monsters from './components/Monsters';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header />
      <Box bg='black' color='white' height='100%' minHeight='100vh' pt='20' pb='20'>
        <Container maxW='container.xl' centerContent overflow='hidden'>
          <Monsters isLoading={isLoading} setIsLoading={setIsLoading} />
        </Container>
      </Box>
    </>
  )
}

export default App
