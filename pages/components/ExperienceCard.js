import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

const ProficiencyCard = ({ title, svg, percent }) => {


  return (
    <Flex flexDir='column' align='center' justify='center' mr='6' p='4' rounded='md' border='1px' borderColor='gray'>
      <Box pos='relative' w='200px' h='200px'>
        <Image src={svg} alt='' priority layout='fill' objectFit='contain' />
      </Box>
      <Text fontWeight='semibold' fontSize='xl' textAlign='center'>{title}</Text>
    </Flex>
    // <Flex
    //   flexDir='column'
    //   minW='150px'
    //   align='center'
    //   justify='center'
    //   px='20' py='6'
    //   mr='8'
    //   rounded='md'
    //   shadow='md'
    //   border='1px'
    //   borderColor='gray'>
    //   <Box pos='relative' w='96px' h='96px'>
    //     <Image
    //       src={svg}
    //       alt=''
    //       priority
    //       layout='fill'
    //       objectFit='contain'
    //     />
    //   </Box>
    //   <Text mt='2' fontWeight='semibold' fontSize='xl' letterSpacing='1px'>{title}</Text>
    //   <HStack>
    //     <Box fontSize='xl' fontWeight='semibold' letterSpacing='2px'>
    //       <Number n={percent} />
    //     </Box>
    //     <Text>%</Text>
    //   </HStack>
    //   <Icon
    //     mt='4'
    //     color='green.500'
    //     fontSize='30px'
    //     as={IoMdCheckmarkCircleOutline}
    //   />
    // </Flex>
  );
};

export default ProficiencyCard;
