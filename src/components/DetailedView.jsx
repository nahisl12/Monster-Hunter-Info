// This is the layout for detailed View
import { useLocation } from 'react-router-dom';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';

const DetailedView = () => {
  let { state } = useLocation();

  console.log(state);

  return (
    <>
      <VStack>
        <Heading as='h1' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>Monster: {state.name}</Heading>
        <Text textAlign='center' fontSize='26' pt='10'>{state.description}</Text>
        <Text textAlign='center' fontSize='24'>Species: {state.species}</Text>

        <Box>
          <Heading as='h4' fontSize={['3xl', '3xl', '3xl']} textAlign={'center'}>Weaknesses</Heading>
          {
            state.locations.map((location, i) => (
              <Box key={i}>
                <Text key={location.name} textAlign='center' fontSize='26' pt='10'>Locale: {location.name}</Text>
                <Text key={i+1} textAlign='center' fontSize='26'>Number of Zones: {location.zoneCount}</Text>
              </Box>
            ))
          }
        </Box>

        <Box pt='10'>
          <Heading as='h4' fontSize={['3xl', '3xl', '3xl']} textAlign={'center'}>Weaknesses</Heading>
          {
            state.weaknesses.map((weakness) => (
              <Text key={weakness.element} textAlign='center' fontSize='26'>{weakness.element}: {weakness.stars}</Text>
            ))
          }
        </Box>
      </VStack>
    </>
  )
}

export default DetailedView;