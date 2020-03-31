import SEOHead from '../components/SEOHead/SEOHead';

const socialLInks = [
  {
    title: 'twitter',
    link: 'https://twitter.com/the69_lab'
  },
  {
    title: 'instagram',
    link: 'https://www.instagram.com/the69_lab/'
  },
  {
    title: 'dribbble',
    link: 'https://dribbble.com/the69_lab/about'
  },
  {
    title: 'linkedin',
    link: '#'
  },
  {
    title: 'behance',
    link: 'https://www.behance.net/the69_lab'
  },
  {
    title: 'pinterest',
    link: '#'
  }
];

const IndexPage = () => {
  return (
    <>
      <SEOHead />
      <main className="flex flex-col items-center justify-between min-h-screen px-10 lg:px-40">
        <nav className="flex justify-between py-10 w-full">
          <a href="/">
            <img src="/img/logo/logo.svg" alt="The 69 lab" />
          </a>
          <a className="hover:text-primary" href="mailto:hello@the69.xyz">
            Leave a message
          </a>
        </nav>
        <h1>
          We are an independent design firm, established on the premise of
          infinite potential & responsiveness, centered on infinite,
          multidimensional & utopian ideas.
        </h1>
        <ul className="flex items-center justify-between mb-32 w-full lg:w-auto">
          {socialLInks.map(({ title, link }) => (
            <a href={link} key={title} className="lg:mx-12">
              <img
                className="w-6 lg:w-8 social-icon"
                src={`/img/icons/${title}.svg`}
                alt={`The 69 lab ${title} profile`}
              />
            </a>
          ))}
        </ul>
      </main>

      <style jsx>
        {`
          h1 {
            font-size: 5.6rem;
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            line-height: 72px;
            text-align: center;
          }
          img {
            transition: .2s all;
          }
          .social-icon:hover {
            filter: invert(0) sepia(1) saturate(20) hue-rotate(316.8deg) brightness(1.05);
          }
          @media only screen and (max-width: 640px) {
            h1 {
              font-size: 32px;
              font-size: 32px;
              line-height: 48px;
            }
        `}
      </style>
    </>
  );
};

export default IndexPage;
