import { ReactNode } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Flex justifyContent="space-between">
        <Image borderRadius="50%" boxSize="50px" src="/img/foguete1.png" className={styles.icone} />
        <ul className={styles.menu__lista}>
          <Flex justifyContent="space-between">
            <Link href="/">
              <li className={styles.menu__item}>
                <a>HOME</a>
              </li>
            </Link>
            <Link href="skills">
              <li className={styles.menu__item}>
                <a>SKILLS</a>
              </li>
            </Link>
          </Flex>
        </ul>
      </Flex>
    </nav>
  );
}
