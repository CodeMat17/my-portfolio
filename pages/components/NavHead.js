import { Box, HStack, Icon } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import ColorModeToggle from "../components/ColorModeToggle";
import MobileMenu from "../components/menuBtn/MobileMenu";
import DesktopMenuLinks from "./menuBtn/DesktopMenuLinks";

const NavHead = () => {
  return (
    <Box
      as='nav'
      pos='sticky'
      top='0'
      zIndex='70'
      bg='gray.800'
      pl='4'
      pr='2'
      py='4'>
      <HStack
        maxW='4xl'
        mx='auto'
        color='white'
        align='center'
        justify='space-between'>
        <HStack spacing='2' align='center' justify='center'>
          <Box
            pos='relative'
            w='50px'
            h='50px'
            rounded='full'
            overflow='hidden'>
            <Image
              src='/logo.webp'
              priority
              layout='fill'
              objectFit='contain'
            />
          </Box>
          <Link href='https://twitter.com/matt_chuks' target='_blank'>
            <Icon color='#00afee' fontSize='30px' as={FaTwitter} />
          </Link>
        </HStack>

        <HStack spacing='6'>
          <ColorModeToggle />
          <MobileMenu />
          {/* <DesktopMenu /> */}
          <DesktopMenuLinks />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavHead;
