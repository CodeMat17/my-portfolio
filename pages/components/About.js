import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from 'framer-motion'

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
    transition: { type: "spring", bounce: "0.4", duration: 3, },
  },
};

const about = [
  { item: "It gives me joy creating things that live on the internet." },
  {
    item: "I believe in continuous learning to restack my skills and unlearn the old ways of doing things.",
  },
  {
    item: "I love giving back to the tech ecosystem by mentoring the younger developers. I have mentored and facilitated meetups across Africa (physically and remotely) for Google Africa via Andela Learning Community, ALC, for 3 seasons.",
  },
  {
    item: "I am also a member of Policy, Strategy and Leadership Course, class 20, of the prestigious institution, National Institute For Policy and Strategic Studies, NIPSS, Kuru, Jos, Nigeria.",
  },
];

const About = () => {
  return (
    <Box id='about'
      as={motion.div}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.6 }}
      py='20'
      px='6'
      maxW='xl'
      mx='auto'>
      <Box as={motion.div}>
        <Text
          as={motion.div}
          variants={animTitle}
          fontSize='3xl'
          textAlign='center'
          fontWeight='bold'
          letterSpacing='widest'>
          ABOUT ME
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

      <Box as={motion.div} mt='8' fontSize='lg'>
        <VStack as={motion.div} align='start'>
          {about.map((item, index) => (
            <Text key={index}>{item.item}</Text>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default About;
