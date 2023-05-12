import 
  { 
    Card,
    CardBody, 
    CardFooter, 
    Heading, 
    Text, 
    Image, 
    Stack,
    Button
  } from '@chakra-ui/react';
  import fallBackImg from '../assets/mhw_logo.png';

// eslint-disable-next-line react/prop-types
const InfoCard = ({ img, name, description }) => {
  return (
    <Card maxW='sm'>
      <CardBody pb='0'>
        <Image src={img} fallbackSrc={fallBackImg} borderRadius='lg' margin='0 auto' />
        <Stack mt='6' spacing='3'>
          <Heading textAlign='center'>{name}</Heading>
          <Text textAlign='center' noOfLines={4}>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant='solid' colorScheme='green' margin='0 auto'>Learn More</Button>
      </CardFooter>
    </Card>
  )
}

export default InfoCard;