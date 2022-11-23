import type { NextPage } from 'next';
import Head from 'next/head';
import Placeholder from '../components/Placeholder';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

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
