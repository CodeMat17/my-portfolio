import {
  AspectRatio,
  Box,
  Button,
  Circle,
  Highlight,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
// import Link from "next/link";

import {
  SiChakraui,
  SiContentful,
  SiDirectus,
  SiSupabase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Typewriter from "typewriter-effect";

const animDesc = {
  hidden: {  opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: "0.6",
      duration: "4",
      ease: "easeInOut",
    },
  },
};

const animImg = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: "0.4",
      duration: "3",
      ease: "easeInOut",
    },
  },
};

const animName = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    // rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 0.6 },
  },
};

const animTypewriter = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    // rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 1.2 },
  },
};

const animContactBtn = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 1.6 },
  },
};

const animIcon1 = {
  hidden: { x: -300, opacity: 0, scale: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: "0.4", duration: 5, delay: 2 },
  },
};

const animIconText1 = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, delay: 5.2 },
  },
};

const animIcon2 = {
  hidden: { x: -300, opacity: 0, scale: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 2.6 },
  },
};
const animIconText2 = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, delay: 5.8 },
  },
};

const animIcon3 = {
  hidden: { x: -300, opacity: 0, scale: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 3.2 },
  },
};
const animIconText3 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, delay: 6.4 },
  },
};

const animIcon4 = {
  hidden: { x: -300, opacity: 0, scale: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 3.8 },
  },
};
const animIconText4 = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, delay: 7 },
  },
};

const animIcon5 = {
  hidden: { x: -300, opacity: 0, scale: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 4.4 },
  },
};
const animIconText5 = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, delay: 7.6 },
  },
};

const animIcon6 = {
  hidden: { x: -300, opacity: 0, scale: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 5 },
  },
};
const animIconText6 = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, delay: 8.2 },
  },
};

const myName = '{name: "MATTHEW"}';

const HeroPage = () => {
  return (
    <Box id='home' maxW='4xl' mx='auto' pb='200px'>
      <Box pos='relative'>
        <Box
          as={motion.div}
          // initial='hidden'
          // whileInView='visible'
          // viewport={{ once: false, amount: 0.56 }}
          // transition={{ staggerChildren: 0.6 }}
          pos='relative'
          mx='auto'
          maxW='350px'
          h='80vh'>
          <AspectRatio
            as={motion.div}
            initial='hidden'
            whileInView='visible'
            // viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.6 }}
            zIndex='40'
            ratio={1}
            maxW='345px'
            h='75vh'
            mx='auto'>
            <Box as={motion.div} variants={animImg} pos='relative' my='12'>
              <Image
                alt='profile'
                layout='fill'
                objectFit='cover'
                priority
                src='/images/profile.webp'
              />
            </Box>
          </AspectRatio>

          <Circle
            opacity='0.2'
            pos='absolute'
            top='12'
            right='0'
            left='0'
            bg='gray.800'
            w='350px'
            h='350px'></Circle>
        </Box>
        <Box
          as={motion.div}
          initial='hidden'
          whileInView='visible'
          // viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.6 }}
          pos='absolute'
          top='300px'
          left={[0, 12, 20]}
          px='6'
          py='3'
          maxW='lg'
          zIndex='60'
          fontSize='2xl'
          // bg='gray.800'
          // opacity='0.5'
          textShadow='0 0 20px black'>
          <Text
            as={motion.div}
            variants={animName}
            bgGradient='linear(to-r, blue, #FF0080)'
            bgClip='text'
            fontSize={["3xl", "3xl", "4xl"]}
            fontWeight='bold'>
            {myName}
          </Text>
          <Box as={motion.div} variants={animTypewriter} color='black'>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "I am a fullstack Software Developer -",
                  "- (Mobile Web Specialist).",
                  "With latest technologies, I develop sleek, dynamic and SEO enabled mobile - web applications.",
                  "Contact me today.",
                ],
              }}
            />
          </Box>

          {/* <Button
            as={motion.div}
            variants={animContactBtn}
            size='lg'
            mt='8'
            bg='gray.800'
            color='white'
            bgGradient='linear(to-r, blue, #FF0080)'
            _hover={{ bgGradient: "linear(to-l, blue, #FF0080)" }}>
            CONTACT ME
          </Button> */}
          <Box as={motion.div} variants={animContactBtn}>
            <Menu>
              <MenuButton
                as={Button}
                size='lg'
                mt='8'
                color='white'
                bgGradient='linear(to-r, blue, #FF0080)'
                _hover={{ bgGradient: "linear(to-l, blue, #FF0080)" }}>
                CONTACT ME
              </MenuButton>
              <MenuList>
                <MenuItem as='a' href='mailto:codemat.biz@gmail.com' target='_blank'>
                  Send eMail
                </MenuItem>
                <MenuItem as='a' href='https://wa.me/+2349125435257' target='_blank'>
                  WhatsApp Chat
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <Box
          as={motion.div}
          initial='hidden'
          whileInView='visible'
          // viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.6 }}
          pos='absolute'
          top='20'
          px='6'
          display='grid'
          gap={["4", 4, 6]}
          right={[0, 0, 12, 16]}
          zIndex='60'>
          <Link as={motion.div} href='https://reactjs.org' target='_blank'>
            <HStack as={motion.div} spacing='-2'>
              <Box as={motion.div} variants={animIcon1}>
                <Icon
                  ml={[0, -6]}
                  fontSize={["25px", "30px", "35px", "45px"]}
                  as={FaReact}
                />
              </Box>
              <Tag
                display={{ base: "none", sm: "flex" }}
                as={motion.div}
                variants={animIconText1}
                variant=''>
                React.js
              </Tag>
            </HStack>
          </Link>
          <Link as={motion.div} href='https://nextjs.org' target='_blank'>
            <HStack as={motion.div} spacing='-2'>
              <Box as={motion.div} variants={animIcon2}>
                <Icon
                  ml={[0, 2]}
                  fontSize={["25px", "30px", "35px", "45px"]}
                  as={TbBrandNextjs}
                />
              </Box>
              <Tag
                display={{ base: "none", sm: "flex" }}
                as={motion.div}
                variants={animIconText2}
                variant=''>
                Next.js
              </Tag>
            </HStack>
          </Link>
          <Link as={motion.div} href='https://supabase.com' target='_blank'>
            <HStack as={motion.div} spacing='-2'>
              <Box as={motion.div} variants={animIcon3}>
                <Icon
                  ml={[0, 6]}
                  fontSize={["25px", "30px", "35px", "45px"]}
                  as={SiSupabase}
                />
              </Box>
              <Tag
                display={{ base: "none", sm: "flex" }}
                as={motion.div}
                variants={animIconText3}
                variant=''>
                Supabase
              </Tag>
            </HStack>
          </Link>
          <Link as={motion.div} href='https://chakra-ui.com' target='_blank'>
            <HStack as={motion.div} spacing='-2'>
              <Box as={motion.div} variants={animIcon4}>
                <Icon
                  ml={[0, 6]}
                  fontSize={["25px", "30px", "35px", "45px"]}
                  as={SiChakraui}
                />
              </Box>
              <Tag
                display={{ base: "none", sm: "flex" }}
                as={motion.div}
                variants={animIconText4}
                variant=''>
                Chakra-UI
              </Tag>
            </HStack>
          </Link>
          <Link
            as={motion.div}
            href='https://www.contentful.com'
            target='_blank'>
            <HStack as={motion.div} spacing='-2'>
              <Box as={motion.div} variants={animIcon5}>
                <Icon
                  ml={[0, 2]}
                  fontSize={["25px", "30px", "35px", "45px"]}
                  as={SiContentful}
                />
              </Box>
              <Tag
                display={{ base: "none", sm: "flex" }}
                as={motion.div}
                variants={animIconText5}
                variant=''>
                Contentful
              </Tag>
            </HStack>
          </Link>
          <Link as={motion.div} href='https://directus.io' target='_blank'>
            <HStack as={motion.div} spacing='-2'>
              <Box as={motion.div} variants={animIcon6}>
                <Icon
                  ml={[0, -6]}
                  fontSize={["25px", "30px", "35px", "45px"]}
                  as={SiDirectus}
                />
              </Box>
              <Tag
                display={{ base: "none", sm: "flex" }}
                as={motion.div}
                variants={animIconText6}
                variant=''>
                Directus
              </Tag>
            </HStack>
          </Link>
        </Box>
      </Box>
      <Box
        as={motion.div}
        initial='hidden'
        whileInView='visible'
        pb='8'
        pos='absolute'
        left='0'
        right='0'
        top={[, 650]}
        textAlign='center'
        zIndex='40'
        px='6'
        maxW='xl'
        mx='auto'>
        <Text
          mt='4'
          as={motion.div}
          variants={animDesc}
          fontWeight='bold'
          fontSize='2xl'>
          <Highlight
            query={["secured", "SEO", "smoothly", "confidently"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "teal.100",
            }}>
            A secured and SEO enabled Mobile-Web apps makes a business run
            smoothly and confidently.
          </Highlight>
        </Text>
      </Box>
    </Box>
  );
};

export default HeroPage;
