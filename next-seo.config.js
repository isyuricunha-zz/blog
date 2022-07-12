const title = 'Example blog with Next.js';
const titleTemplate = '%s';
const description =
  'Example blog built with Next.js + TailwindCSS and deployed with Vercel';

const SEO = {
  title,
  titleTemplate,
  description,
  canonical: 'https://www.blog.garotogordo.codes/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.blog.garotogordo.codes/',
    title,
    description,
    images: [
      {
        url: 'https://www.blog.garotogordo.codes//api/thumbnail.png',
        alt: title,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    handle: '@isyuricunha',
    site: '@isyuricunha',
    cardType: 'summary_large_image'
  }
};

export default SEO;
