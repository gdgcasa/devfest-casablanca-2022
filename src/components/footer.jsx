const footerLinks = [
  {
    title: 'Past DevFests',
    links: [
      {
        label: 'DevFest Casablanca 2021',
        href: 'https://devfest-casablanca-2021.web.app/',
      },
      {
        label: 'DevFest Casablanca 2020',
        href: 'https://devfest-casablanca-2020.web.app/',
      },
      {
        label: 'DevFest Casablanca 2019',
        href: 'https://devfest-casablanca-2019.web.app/',
      },
      {
        label: 'DevFest Casablanca 2018',
        href: 'https://devfest-casablanca-2018.web.app/',
      },
      {
        label: 'DevFest Casablanca 2017',
        href: 'https://devfest17-casabanlca.web.app/',
      },
    ],
  },
  {
    title: 'About',
    links: [
      {
        label: 'GDG Casablanca',
        href: 'https://gdgcasablanca.com/',
      },
      {
        label: 'WTM Casablanca',
        href: 'https://wtm.gdgcasablanca.com/',
      },
      {
        label: 'Women Techmakers',
        href: 'https://www.womentechmakers.com/',
      },
      // {
      //   label: 'Code of conduct',
      //   href: '/coc',
      //   internal: true,
      // },
      {
        label: 'Community Guidelines',
        href: 'https://developers.google.com/community-guidelines',
      },
      {
        label: 'Google Developers Group',
        href: 'https://developers.google.com/community/gdg',
      },
    ],
  },
  {
    title: 'Social',
    links: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/gdgcasablanca',
      },
      {
        href: 'https://www.facebook.com/GDGCasa/',
        label: 'Facebook',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/gdgcasablanca/',
      },
      {
        label: 'Youtube',
        href: 'https://youtube.com/c/GDGWTMCasablanca',
      },
    ],
  },
  {
    title: 'Partner & Sponsor',
    links: [
      {
        label: 'contact@gdgcasablanca.com',
        href: 'mailto:contact@gdgcasablanca.com',
      },
      {
        label: 'Twitter Page',
        href: 'https://twitter.com/gdgcasablanca',
      },
      {
        label: 'Facebook Page',
        href: 'https://www.facebook.com/GDGCasa/',
      },
    ],
  },
]

export default function Footer() {
  return (
    <footer className='bg-[#161618] py-20 text-slate-50'>
      <div className='mx-auto flex max-w-7xl flex-col gap-32 px-6'>
        <div>
          <div className='mb-1 text-sm'>Brought to you by</div>
          <h4 className='text-3xl'>GDG & WTM Casablanca</h4>
        </div>

        <div className='flex flex-wrap justify-between gap-12'>
          {footerLinks.map((linksSet, index) => (
            <div key={index.toString()}>
              <h5 className='mb-2.5 text-xl font-bold'>{linksSet.title}</h5>
              <ul className='flex flex-col gap-y-1'>
                {linksSet.links.map(({ label, href }, index) => (
                  <li key={index.toString()} className='text-xl'>
                    <a
                      href={href}
                      target='_blank'
                      rel='noreferrer'
                      className='transition-colors hover:text-blue-400'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className='text-center'>
          Made with ❤️ By{' '}
          <a
            href='https://github.com/gdgcasa/'
            className=''
            target='_blank'
            rel='noreferrer'
          >
            GDG Casablanca
          </a>
          ,{' '}
          <a
            href='https://github.com/gdgcasa/devfest-casablanca-2022'
            className=''
            target='_blank'
            rel='noreferrer'
          >
            sourced on GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
