/* eslint-disable react/prop-types */
import { 
    Box,  
    Heading, 
    Flex, 
    Image,
    Text,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';
  
// img imports  
import fallBackImg from '../assets/mhw_logo.png';
import blast from '../assets/elements/Status_Blastblight_Icon.png';
import poison from '../assets/elements/Status_Poison_Icon.png';
import sleep from '../assets/elements/Status_Sleep_Icon.png';
import paralysis from '../assets/elements/Status_Paralysis_Icon.png';
import stun from '../assets/elements/Status_Stun_Icon.png';
import ice from '../assets/elements/Element_Ice_Icon.png';
import water from '../assets/elements/Element_Water_Icon.png';
import thunder from '../assets/elements/Element_Thunder_Icon.png';
import fire from '../assets/elements/Element_Fire_Icon.png';
import dragon from '../assets/elements/Element_Dragon_Icon.png';

const statusTypes = [
  {'type': 'blast', 'icon': blast},
  {'type': 'poison', 'icon': poison},
  {'type': 'sleep', 'icon': sleep},
  {'type': 'paralysis', 'icon': paralysis},
  {'type': 'stun', 'icon': stun},
  {'type': 'ice', 'icon': ice},
  {'type': 'water', water},
  {'type': 'thunder', 'icon': thunder},
  {'type': 'fire', 'icon': fire},
  {'type': 'dragon', 'icon': dragon},
];

const AccordionInfo = ({ heading, data, type, isArray }) => {

  const accordionType = type;

  if(accordionType === 'monster') {
    return (
      <AccordionItem>
        <AccordionButton display='flex' justifyContent='space-between'>
          <Heading as='h3' fontSize={['2xl', '2xl', '2xl']} textAlign={'center'} mt='5' mb='5'>{heading}</Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel mb='10'>
          <Flex gap='5' justify='center' wrap='wrap'>
            {
              data.map((element, i) => {
                const src = statusTypes.filter(type => type.type === element || type.type === element.element);
                
                return (
                  <Box key={i}>
                    <Image src={src[0]?.icon} fallbackSrc={fallBackImg} borderRadius='lg' margin='0 auto' maxW='90' />
                    {element.stars && <Text textAlign='center' fontSize='20'>{element.stars}</Text>}
                  </Box>
                )
              })
            }
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    )
  }

  if(accordionType === 'armour') {
    return (
      <AccordionItem>
        <AccordionButton display='flex' justifyContent='space-between'>
          <Heading as='h3' fontSize={['2xl', '2xl', '2xl']} textAlign={'center'} mt='5' mb='5'>{heading}</Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel mb='10'>
          <Flex gap='5' justify='center' wrap='wrap'>
            { !isArray && (
              Object.entries(data).map(([key, value]) => {             
                return (
                  <Text key={key} textAlign='center' fontSize={['16px', '20px', '22px']} mt='5'>{key}: {value}</Text>
                )
              })
            )
            }

            {
              isArray && (
                data.map(element => {
                  return (
                    <Flex key={element.id} gap='5'>
                      <Text textAlign='center' fontSize={['12px', '14px', '16px']} mt='5'>{element.skillName}: </Text>
                      <Text textAlign='center' fontSize={['12px', '14px', '16px']} mt='5'>{element.description}</Text>
                    </Flex>
                  )
                })
              )
            }
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    )
  }

  return (
    <>other</>
  )
}

export default AccordionInfo;