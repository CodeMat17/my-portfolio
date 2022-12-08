import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import { links } from "../../../navlinks";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={{ md: "none" }}>
      <IconButton
        variant='ghost'
        onClick={onOpen}
        color='#00afee'
        icon={<HiMenuAlt3 size={32} />}
        isRound
        size='lg'
      />

      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex pos='relative' w='50px' h='50px' rounded='full' overflow='hidden'>
          <Image src='/logo.webp' priority layout="fill" objectFit="contain" />
            </Flex>
          </DrawerHeader>
          <DrawerBody pt='20'>
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                <Button onClick={onClose} variant='ghost' my='2' size='lg' letterSpacing='wider' w='100%'>
                  {link.item}
                </Button>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
