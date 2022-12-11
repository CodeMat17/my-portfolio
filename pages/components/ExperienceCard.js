import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const ProficiencyCard = ({ title, svg, percent }) => {
  return (
    <Flex
      flexDir='column'
      align='center'
      justify='center'
      mr='6'
      px='6'
      rounded='md'
      border='1px'
      borderColor='gray'>
      <Box pos='relative' w='200px' h='200px'>
        <Image src={svg} alt='' priority layout='fill' objectFit='contain' />
      </Box>
      <Text fontWeight='semibold' fontSize='xl' textAlign='center'>
        {title}
      </Text>
    </Flex>
  );
};

export default ProficiencyCard;
