import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { animated, useSpring } from "react-spring";

// const animCard = {
//   hidden: { x: 100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     // rotate: [0, 10, 0],
//     transition: { type: "spring", bounce: "0.4", duration: 3, delay: 0.6 },
//   },
// };

const SkillCard1 = ({ svg, title, percent }) => {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 800,
      config: { mass: 1, tension: 20, friction: 20 },
    });
    return (
      <animated.div>
        {number.to((n) =>
          n
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        )}
      </animated.div>
    );
  }

  return (
    <Flex
      as={motion.div}
      initial={{ x: 50, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          // type: "spring", bounce: 0.2,
          duration: 2
        },
      }}
      viewport={{ once: false, amount: 0.4 }}
      //   initial='hidden'
      //   whileInView='visible'
      //   viewport={{ once: false, amount: 0.2 }}
      //   transition={{ staggerChildren: 0.6 }}
      flexDir='column'
      align='center'
      justify='center'
      p='2'
      rounded='md'
      shadow='md'
      border='1px'
      borderColor='gray'>
      <Box pos='relative' w='70px' h='70px'>
        <Image src={svg} alt='' priority layout='fill' objectFit='contain' />
      </Box>
      <Text mt='0.5' textAlign='center' fontSize='sm'>
        {title}
      </Text>
      {/* <HStack
        spacing='0'>
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{
            
            opacity: 1,
            // transition: {  delay: 2 },
          }}>
          <Number n={percent} />
        </Box>
        <Text>%</Text>
      </HStack> */}
    </Flex>
  );
};

export default SkillCard1;
