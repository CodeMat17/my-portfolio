import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SkillCard1 from "./SkillCard1";
import SkillCard2 from "./SkillCard2";

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

const card1 = [
  { id: 1, svg: "/svg/html5.svg", title: "HTML5" },
  { id: 2, svg: "/svg/css3.svg", title: "CSS3" },
  { id: 3, svg: "/svg/js.svg", title: "JAVASCRIPT" },
  { id: 4, svg: "/svg/chakra.svg", title: "CHAKRA-UI" },
  { id: 5, svg: "/svg/reactjs.svg", title: "REACT.js" },
  { id: 6, svg: "/svg/nextjs.svg", title: "NEXT.js" },
];

const card2 = [
  { id: 1, svg: "/svg/supabase.svg", title: "SUPABASE" },
  { id: 2, svg: "/svg/firebase.svg", title: "FIREBASE" },
  { id: 3, svg: "/svg/mongodb.svg", title: "MONGODB" },
  { id: 4, svg: "/svg/tailwind.svg", title: "TAILWINDCSS" },
  { id: 5, svg: "/svg/vscode.svg", title: "VS CODE" },
  //   { id: 6, svg: "/svg/", percent: "" },
];

const Skills = () => {
  return (
    <Box
      id='skills'
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
          SKILLS
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
      <Box mx='auto' w='full'>
        <SimpleGrid mt='12' columns='3' spacing='10px'>
          {card1.map((item) => (
            <SkillCard1 key={item.id} svg={item.svg} title={item.title} />
          ))}
        </SimpleGrid>
        <SimpleGrid mt='2.5' mb='12' columns='3' spacing='10px'>
          {card2.map((item) => (
            <SkillCard2 key={item.id} svg={item.svg} title={item.title} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Skills;
