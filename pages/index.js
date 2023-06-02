import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>A Next Js  taiwind CSS starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-center py-4 underline text-4xl text-red-400'>Hello from Next JS + Tailwind CSS</h1>
    </div>
  )
}
