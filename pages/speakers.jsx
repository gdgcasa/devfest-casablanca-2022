import Link from 'next/link'

import DefaultHead from '../src/components/default-head'
import Footer from '../src/components/footer'

export default function Agenda() {
  return (
    <>
      <DefaultHead title='Speakers - GDG DevFest Casablanca 2022' />

      <main>
        <section>
          <Link href='/'>
            <a className='block py-36 text-center text-6xl lg:text-7xl'>
              #devfest
              <wbr />
              <span className='text-blue-500'>casablanca</span>
              <wbr />
              2022
            </a>
          </Link>
        </section>

        <section>
          <iframe
            className='h-screen w-full'
            src='https://sessionize.com/view/9qsrbrxt/SpeakerWall?format=Embed_Styled_Html&isDark=True&title=Devfest%20Casablanca%202022'
          />
        </section>
      </main>

      <Footer />
    </>
  )
}
