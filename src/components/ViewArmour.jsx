import { useLocation } from 'react-router-dom';
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Image,
  Flex,
  Accordion
} from '@chakra-ui/react';
import AccordionInfo from './AccordionInfo';

const ViewArmour = () => {
  let { state } = useLocation();

  return (
    <>
      <VStack>
        <Heading as='h1' mb='5' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>{state.name}</Heading>      
        <Flex pt='15' gap='5'>
          {state.assets?.imageMale && (
            <Image src={state.assets?.imageMale} borderRadius='lg' margin='0 auto' maxW='75%' objectFit='cover' border='3px solid white' />
          )}

          {state.assets?.imageFemale && (
            <Image src={state.assets?.imageFemale} borderRadius='lg' margin='0 auto' maxW='75%' objectFit='cover' border='3px solid white' />
          )}
        </Flex>

        <Box pt='10'>
          <Heading as='h4' fontSize={['3xl', '3xl', '3xl']} textAlign={'center'}>Gear Information: </Heading>
            <Text textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>Type: {state.type.toUpperCase()}</Text>
            <Text textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>Rank: {state.rank.toUpperCase()}</Text>
            <Text textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>Rarity: {state.rarity}</Text>

          <Accordion mt='10' minWidth={['2sm', '2md', '3xl']} defaultIndex={[0]} allowToggle>
            <AccordionInfo heading={'Defense'} data={state.defense} type={'armour'} isArray={false} />
            <AccordionInfo heading={'Resistances'} data={state.resistances} type={'armour'} isArray={false} />
            { state.skills.length > 0 && <AccordionInfo heading={'Skills'} data={state.skills} type={'armour'} isArray={true} /> }
          </Accordion>
        </Box>
      </VStack>
    </>
  )
}

export default ViewArmour;