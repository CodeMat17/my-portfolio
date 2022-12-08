import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ExperienceCard from "./ExperienceCard";

const animTitle = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3, delay: 0.6 },
  },
};

const animLine = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    // rotate: [0, 10, 0],
    transition: { type: "spring", bounce: "0.4", duration: 3 },
  },
};

const cards = [
  { id: 1, title: "BLOGGING WEBSITE", svg: "/work/blogging.svg" },
  { id: 2, title: "PERSONAL WEBSITE", svg: "/work/personal.svg" },
  { id: 3, title: "eCOMMERCE WEBSITE", svg: "/work/ecommerce.svg" },
  { id: 4, title: "FINANCE / LOAN APPS", svg: "/work/finance.svg" },
  {
    id: 5,
    title: "SCHOOL / HOTEL MANAGEMENT SYSTEM",
    svg: "/work/management.svg",
  },
  { id: 6, title: "VENDOR DELIVERY SYSTEM", svg: "/work/vendor.svg" },
  { id: 7, title: "BUSINESS CATALOGUE WEBSITE", svg: "/work/catalogue.svg" },
];

const Experience = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <Box id='experience'
      as={motion.div}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.6 }}
      py='20'
      px='6'
      maxW='3xl'
      mx='auto'>
      <Box as={motion.div}>
        <Text
          as={motion.div}
          variants={animTitle}
          fontSize='3xl'
          textAlign='center'
          fontWeight='bold'
          letterSpacing='wider'>
          EXPERIENCE / WORK
        </Text>
        <Box
          as={motion.div}
          variants={animLine}
          bg='gray'
          h='0.5'
          w='100px'
          mx='auto'
        />
      </Box>
      <Box
        as={motion.div}
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        mt='12'
        cursor='grab'
        overflow='hidden'>
        <Box
          as={motion.div}
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          display='flex'>
          {cards.map((card) => (
            <ExperienceCard
              key={card.id}
              title={card.title}
              svg={card.svg}
            />
          ))}
          <Flex align='center' justify='center' px='12'>
            ETC
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
