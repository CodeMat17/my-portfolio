import { Box, Button, Menu, MenuButton, MenuItem, MenuList, VStack } from "@chakra-ui/react";

const ContactMe = () => {
  return (
    <Box pt='10' pb='20'>
      <VStack>
        <Menu>
          <MenuButton
            as={Button}
            p='8'
            fontSize='xl'
            letterSpacing='1px'
            color='white'
            bgGradient='linear(to-r, blue, #008f00)'
            _hover={{ bgGradient: "linear(to-l, blue, #008f00)" }}>
            CONTACT ME
          </MenuButton>
          <MenuList>
            <MenuItem
              as='a'
              href='mailto:codemat.biz@gmail.com'
              target='_blank'>
              Send eMail
            </MenuItem>
            <MenuItem
              as='a'
              href='https://wa.me/+2349125435257'
              target='_blank'>
              WhatsApp Chat
            </MenuItem>
          </MenuList>
        </Menu>
      </VStack>
    </Box>
  );
};

export default ContactMe;
