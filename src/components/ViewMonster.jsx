import { useLocation } from 'react-router-dom';
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Accordion,
} from '@chakra-ui/react';
import AccordionInfo from './AccordionInfo';

const ViewMonster = () => {
  let { state } = useLocation();

  return (
    <>
      <VStack>
        <Heading as='h1' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>Monster: {state.name}</Heading>
        <Text textAlign='center' fontSize={['16px', '20px', '22px']} pt='10'>{state.description}</Text>

        <Box pt='5'>
          <Heading as='h4' fontSize={['3xl', '3xl', '3xl']} textAlign={'center'} mb='5'>Found In: </Heading>
          {
            state.locations.map((location, i) => (
              <Box key={i}>
                <Text key={location.name} textAlign='center' fontSize='22' mb='3'>{location.name}</Text>
              </Box>
            ))
          }
        </Box>

        <Box pt='0'>
          <Heading as='h4' fontSize={['3xl', '3xl', '3xl']} textAlign={'center'}>Monster Information: </Heading>

          {
            state.type && (
              <Box>
                <Heading as='h3' fontSize={['2xl', '2xl', '2xl']} textAlign={'center'} mt='5' mb='5'>Type: 
                  <Text as='span' fontWeight='normal'> {state.type.toUpperCase()}</Text>
                </Heading>
                <Heading as='h3' fontSize={['2xl', '2xl', '2xl']} textAlign={'center'} mt='5' mb='5'>Species:  
                  <Text as='span' fontWeight='normal'> {state.species.toUpperCase()}</Text>
                </Heading>
              </Box>
            )
          }

          <Accordion mt='10' minWidth={['2sm', '2md', '3xl']} defaultIndex={[0]} allowToggle>
            {
              state.elements.length > 0 && (
                <AccordionInfo heading={'Element(s)'} data={state.elements} type={'monster'} />
              )
            }
            {
              state.resistances.length > 0 && (
                <AccordionInfo heading={'Resistances: '} data={state.resistances} type={'monster'}  />
              )
            }
            {
              state.weaknesses.length > 0 && (
                <AccordionInfo heading={'Weaknesses: '} data={state.weaknesses} type={'monster'}  />
              )
            }
          </Accordion>
        </Box>
      </VStack>
    </>
  )
}

export default ViewMonster;