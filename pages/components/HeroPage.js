import {
  AspectRatio,
  Box,
  Button,
  Highlight,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiContentful,
  SiDirectus,
  SiSupabase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Typewriter from "typewriter-effect";

const animDesc = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // type: "spring",
      // bounce: "0.6",
      duration: "2",
      ease: "easeInOut",
    },
  },
};

const animImg = {
  hidden: { opacity: 0, scale: 0.5 },
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
    transition: {
      // type: "spring", bounce: "0.4",
      duration: 5,
      delay: 2,
    },
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
    transition: {
      // type: "spring", bounce: "0.4",
      duration: 3,
      delay: 2.6,
    },
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
    transition: {
      // type: "spring", bounce: "0.4",
      duration: 3,
      delay: 3.2,
    },
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
    transition: {
      // type: "spring", bounce: "0.4",
      duration: 3,
      delay: 3.8,
    },
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
    transition: {
      // type: "spring", bounce: "0.4",
      duration: 3,
      delay: 4.4,
    },
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
    transition: {
      // type: "spring", bounce: "0.4",
      duration: 3,
      delay: 5,
    },
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
    <Box id='home' py='{[]}' maxW='6xl' mx='auto'>
      <SimpleGrid spacing='60px' columns={[1, 1, 2]}>
        <Box
          pos='relative'
          bgImage="url('/images/green_bg.webp')"
          bgPosition='center'
          bgRepeat='no-repeat'>
          <AspectRatio
            as={motion.div}
            initial='hidden'
            whileInView='visible'
            // viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.6 }}
            zIndex='40'
            ratio={1}
            maxW='245px'
            h='350px'
            mx='auto'>
            <Box as={motion.div} variants={animImg} pos='relative' my='12' roundedBottom='full' borderBottom='4px' borderColor='green'>
              <Image
                alt='profile'
                layout='fill'
                objectFit='cover'
                priority
                src='/images/profile2.webp'
              />
            </Box>
          </AspectRatio>

          <Box
            as={motion.div}
            initial='hidden'
            whileInView='visible'
            // viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.6 }}
            pos='absolute'
            top='10'
            px=''
            display='grid'
            gap={["4", 4, 6]}
            right={[4, 2, -4, -6]}>
            <Link as={motion.div} href='https://reactjs.org' target='_blank'>
              <HStack as={motion.div} spacing='-2'>
                <Box as={motion.div} variants={animIcon1}>
                  <Icon
                    ml={[0, -6]}
                    fontSize={["25px", '30px'
                    ]}
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
                    fontSize={["25px", "30px"]}
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
                    fontSize={["25px", "30px"]}
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
                    fontSize={["25px", "30px"]}
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
                    fontSize={["25px", "30px"]}
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
                    fontSize={["25px", "30px"]}
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

        <VStack align='start' px='6' mt={[0, 0, 24]}>
          <Text
            as={motion.div}
            variants={animName}
            bgGradient='linear(to-r, blue, #FF0080)'
            bgClip='text'
            textAlign='center'
            color='#008f00'
            fontSize={["2xl", "2xl", "3xl", "4xl"]}
            fontWeight={["black"]}>
            I AM MATTHEW!
          </Text>
          <Box
            minH={["80px"]}
            as={motion.div}
            variants={animTypewriter}
            // color='black'
            fontSize='lg'>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "A fullstack Software Developer -",
                  "- (Mobile Web Specialist).",
                  "With latest technologies, I develop sleek, dynamic and SEO enabled mobile - web applications.",
                  "Contact me today.",
                ],
              }}
            />
          </Box>
          <Box as={motion.div} variants={animContactBtn}>
            <Menu>
              <MenuButton
                as={Button}
                size='lg'
                mt='8'
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
          </Box>
        </VStack>
      </SimpleGrid>

      <Box
        as={motion.div}
        initial='hidden'
        whileInView='visible'
        mt='16'
        // pb='8'
        // pos='absolute'
        // left='0'
        // right='0'
        // top={[, 650]}
        textAlign='center'
        zIndex='40'
        px='6'
        maxW='xl'
        mx='auto'>
        <Text
          mt='4'
          as={motion.div}
          variants={animDesc}
          fontWeight='semibold'
          fontSize='xl'>
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

    //     <Box
    //       as={motion.div}
    //       initial='hidden'
    //       whileInView='visible'
    //       // viewport={{ once: false, amount: 0.5 }}
    //       transition={{ staggerChildren: 0.6 }}
    //       pos='absolute'
    //       top='20'
    //       px='6'
    //       display='grid'
    //       gap={["4", 4, 6]}
    //       right={[0, 0, 12, 16]}
    //       zIndex='60'>
    //       <Link as={motion.div} href='https://reactjs.org' target='_blank'>
    //         <HStack as={motion.div} spacing='-2'>
    //           <Box as={motion.div} variants={animIcon1}>
    //             <Icon
    //               ml={[0, -6]}
    //               fontSize={["25px", "30px", "35px", "45px"]}
    //               as={FaReact}
    //             />
    //           </Box>
    //           <Tag
    //             display={{ base: "none", sm: "flex" }}
    //             as={motion.div}
    //             variants={animIconText1}
    //             variant=''>
    //             React.js
    //           </Tag>
    //         </HStack>
    //       </Link>
    //       <Link as={motion.div} href='https://nextjs.org' target='_blank'>
    //         <HStack as={motion.div} spacing='-2'>
    //           <Box as={motion.div} variants={animIcon2}>
    //             <Icon
    //               ml={[0, 2]}
    //               fontSize={["25px", "30px", "35px", "45px"]}
    //               as={TbBrandNextjs}
    //             />
    //           </Box>
    //           <Tag
    //             display={{ base: "none", sm: "flex" }}
    //             as={motion.div}
    //             variants={animIconText2}
    //             variant=''>
    //             Next.js
    //           </Tag>
    //         </HStack>
    //       </Link>
    //       <Link as={motion.div} href='https://supabase.com' target='_blank'>
    //         <HStack as={motion.div} spacing='-2'>
    //           <Box as={motion.div} variants={animIcon3}>
    //             <Icon
    //               ml={[0, 6]}
    //               fontSize={["25px", "30px", "35px", "45px"]}
    //               as={SiSupabase}
    //             />
    //           </Box>
    //           <Tag
    //             display={{ base: "none", sm: "flex" }}
    //             as={motion.div}
    //             variants={animIconText3}
    //             variant=''>
    //             Supabase
    //           </Tag>
    //         </HStack>
    //       </Link>
    //       <Link as={motion.div} href='https://chakra-ui.com' target='_blank'>
    //         <HStack as={motion.div} spacing='-2'>
    //           <Box as={motion.div} variants={animIcon4}>
    //             <Icon
    //               ml={[0, 6]}
    //               fontSize={["25px", "30px", "35px", "45px"]}
    //               as={SiChakraui}
    //             />
    //           </Box>
    //           <Tag
    //             display={{ base: "none", sm: "flex" }}
    //             as={motion.div}
    //             variants={animIconText4}
    //             variant=''>
    //             Chakra-UI
    //           </Tag>
    //         </HStack>
    //       </Link>
    //       <Link
    //         as={motion.div}
    //         href='https://www.contentful.com'
    //         target='_blank'>
    //         <HStack as={motion.div} spacing='-2'>
    //           <Box as={motion.div} variants={animIcon5}>
    //             <Icon
    //               ml={[0, 2]}
    //               fontSize={["25px", "30px", "35px", "45px"]}
    //               as={SiContentful}
    //             />
    //           </Box>
    //           <Tag
    //             display={{ base: "none", sm: "flex" }}
    //             as={motion.div}
    //             variants={animIconText5}
    //             variant=''>
    //             Contentful
    //           </Tag>
    //         </HStack>
    //       </Link>
    //       <Link as={motion.div} href='https://directus.io' target='_blank'>
    //         <HStack as={motion.div} spacing='-2'>
    //           <Box as={motion.div} variants={animIcon6}>
    //             <Icon
    //               ml={[0, -6]}
    //               fontSize={["25px", "30px", "35px", "45px"]}
    //               as={SiDirectus}
    //             />
    //           </Box>
    //           <Tag
    //             display={{ base: "none", sm: "flex" }}
    //             as={motion.div}
    //             variants={animIconText6}
    //             variant=''>
    //             Directus
    //           </Tag>
    //         </HStack>
    //       </Link>
    //     </Box>
    //   </Flex>
    //   <Box
    //     as={motion.div}
    //     initial='hidden'
    //     whileInView='visible'
    //     pb='8'
    //     pos='absolute'
    //     left='0'
    //     right='0'
    //     top={[, 650]}
    //     textAlign='center'
    //     zIndex='40'
    //     px='6'
    //     maxW='xl'
    //     mx='auto'>
    //     <Text
    //       mt='4'
    //       as={motion.div}
    //       variants={animDesc}
    //       fontWeight='bold'
    //       fontSize='2xl'>
    //       <Highlight
    //         query={["secured", "SEO", "smoothly", "confidently"]}
    //         styles={{
    //           px: "2",
    //           py: "1",
    //           rounded: "full",
    //           bg: "teal.100",
    //         }}>
    //         A secured and SEO enabled Mobile-Web apps makes a business run
    //         smoothly and confidently.
    //       </Highlight>
    //     </Text>
    //   </Box>
    // </Box>
  );
};

export default HeroPage;
