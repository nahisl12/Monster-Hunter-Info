import './App.css'
import { useState } from 'react'
import { Container, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Monsters from './components/Monsters';
import Locations from './components/Locations';
import Armours from './components/Armours';
import Weapons from './components/Weapons';
import DetailedView from './components/DetailedView';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header />
      <Box bg='black' color='white' height='100%' minHeight='100vh' pt='20' pb='20'>
        <Container maxW='container.xl' centerContent overflow='hidden'>
        <Routes>
          <Route path='/' element={<Locations isLoading={isLoading} setIsLoading={setIsLoading} />} />
          <Route path='locations' element={<Locations isLoading={isLoading} setIsLoading={setIsLoading} />} />
          <Route path='locations/:slug' element={<h1>locations full view</h1>} />
          <Route path='monsters' element={<Monsters isLoading={isLoading} setIsLoading={setIsLoading} />}/>
          <Route path='monsters/:slug' element={<DetailedView />} />
          <Route path='armour' element={<Armours isLoading={isLoading} setIsLoading={setIsLoading} />} />
          <Route path='armour/:slug' element={<h1>armour full view</h1>} />
          <Route path='weapons' element={<Weapons isLoading={isLoading} setIsLoading={setIsLoading} />} />
          <Route path='weapons/:slug' element={<h1>weapons full view</h1>} />
          <Route path='*' element={<h1>Oops... No Page Found...</h1>} />
        </Routes>
        </Container>
      </Box>
    </>
  )
}

export default App
