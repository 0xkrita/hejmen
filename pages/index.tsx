import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KRITA</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>WHILE THIS IS STILL WIP, CHECK OUT MY <Link href='https://github.com/0xkrita/znft-indra'>CODE</Link></h1>
    </div>
  )
}

export default Home
