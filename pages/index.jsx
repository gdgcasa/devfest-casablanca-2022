import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devfest Casablanca 2022</title>
        <meta
          name='description'
          content='GDG Casablanca organizes a DevFest Conference every year.'
        />
        <link rel='icon' type='image/png' href='/gdg-casa-icon.png' />
      </Head>

      <main className='min-h-screen flex flex-col justify-center items-center gap-2'>
        <h1 className='text-7xl'>
          #devfest<span className='text-blue-500'>casablanca</span>2022
        </h1>
        <p>Coming soon ...</p>
      </main>
    </div>
  )
}
