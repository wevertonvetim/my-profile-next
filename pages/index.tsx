import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../pages/components/navbar';
import SocialProfileWithImage from './components/capa';
import ExperienceTimeLine from './components/experience';
import SkillsUp from './skills';
import { Grid, Heading } from '@chakra-ui/react';
import Footer from './components/footer';

const Home: NextPage = () => {
  return (
    <>
      <NavBar/>
      <Head>
        <title>Raysson Ornelas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SocialProfileWithImage />

      <main className={styles.main}>
        <Heading mt={10} textAlign="center">
          Quem sou eu?
        </Heading>
        <ExperienceTimeLine />
      </main>
      <Footer />
    </>
  );
};

export default Home;