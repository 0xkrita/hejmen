import type { NextPage } from 'next';
import Head from 'next/head';
import Placeholder from '../components/Placeholder';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KRITA</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Placeholder />
    </div>
  );
};

export default Home;
