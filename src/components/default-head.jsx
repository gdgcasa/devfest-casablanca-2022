import Head from 'next/head'

export default function DefaultHead({
  title = 'Devfest Casablanca 2022 - GDG Casablanca',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content='GDG Casablanca organizes a DevFest Conference every year.'
      />
      <link rel='icon' type='image/png' href='/gdg-casa-icon.png' />
    </Head>
  )
}
