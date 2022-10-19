import cx from 'classnames'
import Link from 'next/link'
import Footer from '../components/footer'

const hashtags = [
  {
    label: (
      <span>
        #<span className='font-bold'>Devfest</span>Casablanca
      </span>
    ),
    href: 'https://twitter.com/hashtag/DevfestCasablanca',
  },
  {
    label: (
      <span>
        #Lets<span className='font-bold'>Grow</span>Together
      </span>
    ),
    href: 'https://twitter.com/hashtag/letsgrowtogether',
  },
]

const infoItems = [
  {
    label: 'When',
    value: '29th October 2022',
    bg: 'bg-sky-200/95',
    textLight: 'text-sky-900',
  },
  {
    label: 'Where',
    value: 'Emsi Les Orangers, Casablanca',
    href: 'https://goo.gl/maps/UDMevsYdCGoB47u69',
    bg: 'bg-amber-200/95',
    textLight: 'text-amber-900',
  },
]

export default function HomeScreen() {
  return (
    <>
      <main className='min-h-screen'>
        <section className='flex min-h-[80vh] flex-col items-center justify-center gap-24 px-4 py-24 md:px-0'>
          <h1 className='py-12 text-6xl lg:text-7xl'>
            #devfest
            <wbr />
            <span className='text-blue-500'>casablanca</span>
            <wbr />
            2022
          </h1>

          <section className='mx-auto grid w-full max-w-5xl items-center justify-center gap-3 px-4 md:grid-cols-12 md:gap-8 lg:px-0'>
            <p className='col-span-12 max-w-prose rounded-lg bg-green-50 p-5 text-gray-900 md:col-span-8 lg:p-8'>
              #<strong>devfest</strong>casablanca is a community-run developer
              event happening <strong>every year</strong> focused on community
              building and learning about Google&apos;s technologies and IT
              concepts in general.
            </p>

            <div className='col-span-12 flex max-w-prose items-center justify-center self-stretch rounded-lg bg-gray-50 p-5 text-gray-900 md:col-span-4 lg:p-8'>
              <a
                href='https://gdg.community.dev/events/details/google-gdg-casablanca-presents-devfest-casablanca-2022/'
                target='_blank'
                rel='noreferrer'
                className='text-blue-600 transition-all duration-200 hover:scale-110'
              >
                Get your ticket now!
              </a>
            </div>

            {infoItems.map(({ label, value, href, bg, textLight }, index) => {
              return (
                <section
                  key={index}
                  className={cx(
                    'col-span-12 flex flex-col rounded-lg p-5 text-gray-900 sm:col-span-6 lg:p-8',
                    bg,
                    textLight,
                  )}
                  style={{ flexBasis: '45%' }}
                >
                  <div className='text-xs uppercase lg:text-base'>{label}</div>
                  <div className='text-lg leading-none md:text-xl lg:text-3xl'>
                    <a href={href} target='_blank' rel='noreferrer'>
                      {value}
                    </a>
                  </div>
                </section>
              )
            })}
          </section>
        </section>

        <section className='flex min-h-[40vh] flex-col items-center justify-center gap-12 px-4 py-12 md:px-0'>
          <h3 className='text-center text-5xl font-bold'>
            Go check our agenda
          </h3>
          <Link href='/agenda'>
            <a className='text-2xl font-medium text-blue-300 transition-all hover:scale-105 hover:text-blue-200'>
              Click here
            </a>
          </Link>
        </section>

        <section className='flex min-h-[40vh] flex-col items-center justify-center gap-12 px-4 py-8 md:px-0'>
          <h3>
            <Link href='/speakers'>
              <a className='text-center text-5xl font-bold hover:text-blue-200'>
                Check our speaker list
              </a>
            </Link>
          </h3>
          <div className='mx-auto h-[80vh] w-full max-w-5xl overflow-hidden rounded-lg'>
            <iframe
              className='h-full w-full'
              src='https://sessionize.com/view/9qsrbrxt/SpeakerWall?format=Embed_Styled_Html&isDark=True&title=Devfest%20Casablanca%202022'
            />
          </div>
        </section>

        <section className='flex min-h-[40vh] flex-col items-center justify-center gap-2 px-4 md:px-0'>
          <div className='mx-auto flex max-w-6xl flex-col items-center gap-y-6 px-6'>
            <h3 className='text-center text-5xl font-bold'>
              Share your story with us
            </h3>
            <p className='text-center text-2xl'>
              Let’s connect and use these hashtags:
            </p>

            <ul className='flex flex-wrap justify-center gap-x-8 gap-y-4 text-2xl'>
              {hashtags.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-block rounded-full bg-[#CDDFFD] px-5 py-2 text-gray-900 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-900'
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='flex min-h-[40vh] flex-col items-center justify-center gap-2 px-4 text-2xl md:px-0'>
          For partners, sponsors, and speakers, please contact us at:{' '}
          <a
            href='mailto:contact@gdgcasablanca.com?subject=Devfest info'
            className='text-blue-400 transition-colors hover:text-blue-600'
            style={{ fontSize: 'smaller' }}
            target='_blank'
            rel='noreferrer'
          >
            contact@gdgcasablanca.com
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}
