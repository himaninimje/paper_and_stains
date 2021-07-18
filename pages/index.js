import Head from 'next/head'
import Image from 'next/image'
import PaintingBox from './common/PaintingsBox'

export default function Home() {
  return (
    <>
      <Head>
        <title>Paper and Stains</title>
      </Head>
      <div className="p-10">
        <PaintingBox />
      </div>
    </>
  )
}
