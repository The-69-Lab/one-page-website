import NextHead from 'next/head';
import PropTypes from 'prop-types';

const SEOHead = ({ title, description, url, ogImage }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
    />
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/apple-icon.png" />
    <meta name="theme-color" content="#FFD731" />
    <meta name="keywords" content="livevend-pro, cunstruction" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:site" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  ogImage: PropTypes.string
};

SEOHead.defaultProps = {
  title: 'The69lab',
  description:
    'We are an independent design firm, established on the premise of infinite potential & responsiveness, centered on infinite, multidimensional & utopian ideas.',
  url: 'https://the69.xyz',
  ogImage: '/img/logo/logo.png'
};

export default SEOHead;
