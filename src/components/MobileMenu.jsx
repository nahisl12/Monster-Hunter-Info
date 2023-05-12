import {
    Heading, 
    Button,
    Link,
    VStack,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
import { NavLink as routerLink } from 'react-router-dom';

  // eslint-disable-next-line react/prop-types
const MobileMenu = ({ isOpen, onClose, buttonRef, urls }) => {
  return (
    <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={buttonRef}
          size='md'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton top='19px' />
            <DrawerHeader pt='24px' pb='20px'>
              <Heading fontSize='lg' fontWeight='bold'>MHInfo</Heading>
            </DrawerHeader>

            <DrawerBody>
              <VStack>
                  {
                    // eslint-disable-next-line react/prop-types
                    urls?.map((item) => (
                      <Link as={routerLink} to={item === 'Home' ? '/' : item.toLowerCase()} key={item} display='flex'>
                        <Button key={item} color='green.300' variant='link' mb='15'>{item}</Button>
                      </Link>
                    ))
                  }
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
  )
}

export default MobileMenu;