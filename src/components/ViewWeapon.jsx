import { useLocation } from 'react-router-dom';
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Image,
  Flex,
} from '@chakra-ui/react';
import fallBackImg from '../assets/mhw_logo.png';

const ViewWeapon = () => {
  let { state } = useLocation();

  return (
    <>
      <VStack>
        <Heading as='h1' mb='5' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>{state.name}</Heading>     
        {state.assets.image && (
          <Image src={state.assets?.image} borderRadius='lg' margin='0 auto' maxW='75%' objectFit='cover' border='3px solid white' />
        )} 

        <Box pt='10'>
          <Heading as='h4' fontSize={['3xl', '3xl', '3xl']} textAlign={'center'}>Weapon Information: </Heading>
            <Text textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>Attack (Raw): {state.attack.raw}</Text>
            <Text textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>Attack (Display): {state.attack.display}</Text>
            <Flex justify='center' gap='5' mt='5'>
              <Text textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>Type: </Text>
              <Image src={state.assets?.icon} fallbackSrc={fallBackImg} borderRadius='lg' border='3px solid white' />
            </Flex>
            <Text textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>Damage Type: {state.damageType}</Text>
            <Text textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>Rarity: {state.rarity}</Text>

            {
              state.elements ? (
                state.elements.map(element => (
                  <Box key={element.type}>
                    <Text textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>Element Type: {element.type}</Text>
                    <Text textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>Element Damage: {element.damage}</Text>
                  </Box>
                ))
              ) : (<Text>No Element</Text>)
            }
        </Box>
      </VStack>
    </>
  )
}

export default ViewWeapon;