import { Box, Button, HStack } from "@chakra-ui/react";
import { links } from "../../../navlinks";
import {Link} from 'react-scroll'

export const DesktopMenu = () => {
  return (
    <Box display={{ base: "none", md: "flex" }} color='white'>
      <HStack spacing='0' mr='4'>
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            <Button
              variant='ghost'
              fontSize='xl'
              _hover={{ bg: "gray.700" }}
              letterSpacing='1px'>
              {link.item}
            </Button>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};
