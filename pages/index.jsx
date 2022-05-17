import Head from 'next/head'
import HomeScreen from '../src/screen/home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devfest Casablanca 2022 - GDG Casablanca</title>
        <meta
          name='description'
          content='GDG Casablanca organizes a DevFest Conference every year.'
        />
        <link rel='icon' type='image/png' href='/gdg-casa-icon.png' />
      </Head>

      <HomeScreen />
    </div>
  )
}
