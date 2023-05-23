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
import fallBackImg from '../assets/mhw_logo.png';

// eslint-disable-next-line react/prop-types
const AccordionInfo = ({ heading, data, types }) => {
  return (
    <AccordionItem>
      <AccordionButton display='flex' justifyContent='space-between'>
        <Heading as='h3' fontSize={['2xl', '2xl', '2xl']} textAlign={'center'} mt='5' mb='5'>{heading}</Heading>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel mb='10'>
        <Flex gap='5' justify='center'>
          {
            // eslint-disable-next-line react/prop-types
            data.map((element, i) => {
              // eslint-disable-next-line react/prop-types
              const src = types.filter(type => type.type === element || type.type === element.element);
              
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

export default AccordionInfo;