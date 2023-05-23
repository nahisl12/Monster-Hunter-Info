import { useRef } from 'react';
import {
  Heading, 
  Box,
  Button,
  Link,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { NavLink as routerLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = useRef(null);
  const urls = ['Locations', 'Monsters', 'Armour', 'Weapons'];

  return (
    <Box as='section' position='sticky' top='0' zIndex='overlay'>
      <Box as='nav' bg='white' boxShadow='sm'>
        <Container maxW='container.xl' paddingY={{ base: '4', lg: '5' }}>
          <HStack spacing='10' justify='space-between'>
            <Heading fontSize='lg' fontWeight='bold'>MHInfo</Heading>
            {isDesktop ? 
              (
                <Flex justify='space-between' flex='1'>
                  <ButtonGroup variant='link' spacing='8'>
                    {
                      urls.map((item) => (
                        <Link as={routerLink} to={item === 'Home' ? '/' : item.toLowerCase()} key={item} display='flex'>
                          <Button key={item} color='green.300' lineHeight='0'>{item}</Button>
                        </Link>
                      ))
                    }
                  </ButtonGroup>
                  <HStack spacing='3'>
                    <Button variant='primary' color='green.300'>Random</Button>
                  </HStack>
                </Flex>
              ) : 
              (
                <IconButton 
                  variant='ghost'
                  icon={<FiMenu fontSize='1.25rem' />}
                  aria-label='Open Menu'
                  ref={buttonRef}
                  onClick={onOpen}
                /> 
              )
            }
          </HStack>
        </Container>
      </Box>
      <MobileMenu isOpen={isOpen} onClose={onClose} buttonRef={buttonRef} urls={urls} />
    </Box>
  )
}

export default Header;