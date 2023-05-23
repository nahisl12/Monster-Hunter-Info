import { useLocation } from 'react-router-dom';
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Image
} from '@chakra-ui/react';

// img imports
import fallBackImg from '../assets/mhw_logo.png';
import ancientForest from '../assets/locations/MHW-Ancient_Forest.png';
import coralHighlands from '../assets/locations/MHW-Coral_Highlands.png';
import wildspireWaste from '../assets/locations/MHW-Wildspire_Waste.png';
import rottenVale from '../assets/locations/MHW-Rotten_Vale.png';
import eldersRecess from '../assets/locations/MHW-Elders_Recess.png';
import greatRavine from '../assets/locations/MHW-Great_Ravine.png';
import everstream from '../assets/locations/MHW-Everstream.png';
import elDorado from '../assets/locations/MHW-Caverns_of_El_Dorado.png';
import specialArena from '../assets/locations/MHW-special_arena_1.png';
import arena from '../assets/locations/MHW-large_arena.png';

const locations = [
  {"type": "ancient forest", "icon": ancientForest},
  {"type": "coral highlands", "icon": coralHighlands},
  {"type": "wildspire waste", "icon": wildspireWaste},
  {"type": "rotten vale", "icon": rottenVale},
  {"type": "elder's recess", "icon": eldersRecess},
  {"type": "great ravine", "icon": greatRavine},
  {"type": "everstream", "icon": everstream},
  {"type": "caverns of el dorado", "icon": elDorado},
  {"type": "special arena", "icon": specialArena},
  {"type": "arena", "icon": arena},
];

const ViewLocation = () => {
  let { state } = useLocation();
  const imgSrc = locations.filter(location => location.type === state.name.toLowerCase()) ?? null;

  return (
    <>
      <VStack>
        <Heading as='h1' mb='5' fontSize={['3xl', '5xl', '5xl']} textAlign={'center'}>{state.name}</Heading>
        <Image src={imgSrc[0]?.icon} fallbackSrc={fallBackImg} borderRadius='lg' margin='0 auto' maxW='75%' objectFit='cover' border='3px solid white' />
        <Text textAlign='center' fontSize={['16px', '20px', '22px']} pt='10'>Number of Zones: {state.zoneCount}</Text>

        {
          state.camps.length > 0 && (
            <Box>
                <Heading as='h3' fontSize={['2xl', '2xl', '2xl']} textAlign={'center'} mt='5' mb='5'>Camps: </Heading>
                {
                    state.camps.map(camp => (
                      <Box mb={10} key={camp.id}>
                        <Text textAlign='center' fontSize={['16px', '20px', '22px']}>Name: {camp.name}</Text>  
                        <Text textAlign='center' fontSize={['16px', '20px', '22px']}>Zone: {camp.zone}</Text>  
                      </Box>
                    ))
                }
            </Box>
          )
        }
      </VStack>
    </>
  )
}

export default ViewLocation;