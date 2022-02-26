import React from 'react';
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerFooter,
  Button,
  Box,
  Text
} from '@chakra-ui/core';
import { LaunchItem } from './launches';
import { LaunchPadItem } from './launch-pads';
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';

function FavoritesDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const favoritesContext = useContext(FavoritesContext);
  const hasLaunchItems = favoritesContext.launchItems.length > 0;
  const hasLaunchPadItems = favoritesContext.launchPadItems.length > 0;
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Favorites
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favorites</DrawerHeader>

          <DrawerBody overflow="scroll">
            {hasLaunchItems && (
              <Box>
                <Text fontSize="lg">Favorite Launches</Text>
                {favoritesContext.launchItems.flat().map(launch => (
                  <LaunchItem launch={launch} key={launch.flight_number} display="drawer" />
                ))}
              </Box>
            )}
            {hasLaunchPadItems && (
              <Box>
                <Text fontSize="lg">Favorite Launch Pads</Text>
                {favoritesContext.launchPadItems.flat().map(launchPad => (
                  <LaunchPadItem launchPad={launchPad} key={launchPad.site_id} />
                ))}
              </Box>
            )}

            {!hasLaunchItems && !hasLaunchPadItems && (
              <Text fontSize="lg">Oops, nothing here. Guess it's time to go and favorite something</Text>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FavoritesDrawer;
