import 
  { 
    Card,
    CardBody, 
    CardFooter, 
    Heading, 
    Text, 
    Image, 
    Stack,
    Button,
    Link
  } from '@chakra-ui/react';
import fallBackImg from '../assets/mhw_logo.png';
import { NavLink as routerLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const InfoCard = ({ img, name, description, linkLoc, dataObj }) => {
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
      <Link as={routerLink} to={linkLoc} state={dataObj} display='flex' margin='0 auto'>
        <Button variant='solid' colorScheme='green' margin='0 auto'>Learn More</Button>
      </Link>
      </CardFooter>
    </Card>
  )
}

export default InfoCard;