import cx from 'classnames'

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
  { label: 'When', value: 'October 2022' },
  { label: 'Where', value: 'Casablanca' },
]

const bgs = ['bg-sky-200', 'bg-amber-200', 'bg-green-200', 'bg-red-200']

export default function HomeScreen() {
  return (
    <main className='min-h-screen'>
      <section className='flex min-h-[80vh] flex-col items-center justify-center gap-24 px-4 py-24 md:px-0'>
        <h1 className='py-14 text-6xl lg:text-7xl'>
          #devfest
          <wbr />
          <span className='text-blue-500'>casablanca</span>
          <wbr />
          2022
        </h1>
        <section className='mx-auto grid w-full max-w-5xl items-center justify-center gap-3 px-4 md:grid-cols-12 md:gap-8 lg:px-0'>
          <p className='col-span-12 max-w-prose space-y-3 rounded-lg bg-green-50 p-5 text-gray-900 md:col-span-8 lg:p-8'>
            #<strong>devfest</strong>casablanca is a community-run developer
            event happening <strong>every year</strong> focused on community
            building and learning about Google&apos;s technologies and IT
            concepts in general.
          </p>
          <p className='col-span-12 flex max-w-prose items-center justify-center space-y-3 self-stretch rounded-lg bg-gray-50 p-5 text-gray-900 md:col-span-4 lg:p-8'>
            Coming soon ...
          </p>
          {infoItems.map(({ label, value }, index) => {
            return (
              <section
                key={index}
                className={cx(
                  'col-span-12 space-y-3 rounded-lg p-5 text-gray-900 sm:col-span-6 lg:p-8',
                  bgs[index],
                )}
                style={{ flexBasis: '45%' }}
              >
                <div className='text-xs uppercase lg:text-base'>{label}</div>
                <div className='whitespace-nowrap text-3xl leading-none lg:text-6xl'>
                  {value}
                </div>
              </section>
            )
          })}
        </section>
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
                  rel='noreferrer noopener'
                  className='inline-block rounded-full bg-[#CDDFFD] px-5 py-2 text-gray-900 transition-shadow hover:shadow-md hover:shadow-blue-900'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className='mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-4 py-24 lg:px-0'>
        <p>
          <a
            href='https://developers.google.com/community-guidelines'
            target='_blank'
            rel='noreferrer'
          >
            Community guidelines
          </a>
        </p>
      </footer>
    </main>
  )
}
