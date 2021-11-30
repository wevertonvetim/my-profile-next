import { Box, Center, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';

export default function Capa() {
  return (
    <Center p={3}>
      <Box
        maxW={'100vw'}
        borderRadius="md"
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        overflow={'hidden'}>
        <Flex justify={'center'} mt={-16} className={styles.capa}>
          <Image h={'400px'} w={'full'} src="/img/capa.jpg" objectFit={'cover'} />
          <Box className={styles.foto}>
            <Image borderRadius="50%" boxSize="250px" src="/img/profile.jpeg" />
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
