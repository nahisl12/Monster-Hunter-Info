// This is the layout for detailed View
import { useLocation } from 'react-router-dom';
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Accordion,
} from '@chakra-ui/react';
import AccordionInfo from './AccordionInfo';

const statusTypes = [
  {'type': 'blast', 'icon': '../src/assets/elements/Status_Blastblight_Icon.png'},
  {'type': 'poison', 'icon': '../src/assets/elements/Status_Poison_Icon.png'},
  {'type': 'sleep', 'icon': '../src/assets/elements/Status_Sleep_Icon.png'},
  {'type': 'paralysis', 'icon': '../src/assets/elements/Status_Paralysis_Icon.png'},
  {'type': 'stun', 'icon': '../src/assets/elements/Status_Stun_Icon.png'},
  {'type': 'ice', 'icon': '../src/assets/elements/Element_Ice_Icon.png'},
  {'type': 'water', 'icon': '../src/assets/elements/Element_Water_Icon.png'},
  {'type': 'thunder', 'icon': '../src/assets/elements/Element_Thunder_Icon.png'},
  {'type': 'fire', 'icon': '../src/assets/elements/Element_Fire_Icon.png'},
  {'type': 'dragon', 'icon': '../src/assets/elements/Element_Dragon_Icon.png'},
];

const DetailedView = () => {
  let { state } = useLocation();

  console.log(state);

  return (
    <>
      <VStack>
        <Heading as='h1' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>Monster: {state.name}</Heading>
        <Text textAlign='center' fontSize='26' pt='10'>{state.description}</Text>

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
                <Heading as='h3' fontSize={['2xl', '2xl', '2xl']} textAlign={'center'} mt='5' mb='5'>Type: {state.type.toUpperCase()} </Heading>
                <Heading as='h3' fontSize={['2xl', '2xl', '2xl']} textAlign={'center'} mt='5' mb='5'>Species: {state.species.toUpperCase()} </Heading>
              </Box>
            )
          }

          <Accordion mt='10' minWidth='4xl' defaultIndex={[0]} allowToggle>
            {
              state.elements.length > 0 && (
                <AccordionInfo heading={'Element(s)'} data={state.elements} types={statusTypes} />
              )
            }
            {
              state.resistances.length > 0 && (
                <AccordionInfo heading={'Resistances: '} data={state.resistances} types={statusTypes} />
              )
            }
            {
              state.weaknesses.length > 0 && (
                <AccordionInfo heading={'Weaknesses: '} data={state.weaknesses} types={statusTypes} />
              )
            }
          </Accordion>
        </Box>
      </VStack>
    </>
  )
}

export default DetailedView;