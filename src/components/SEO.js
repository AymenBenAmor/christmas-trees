import React from 'react';
import { Helmet } from 'react-helmet';
import socialImage from '../images/christmas-tree.png';

const SEO = ({ title, description, type }) => {
  return (
    <Helmet defer={false}>
      <title>{title ? title : 'Christmas tree'}</title>
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link
        rel="canonical"
        href="https://christmas-tree.netlify.app"
      />
      <meta
        name="description"
        content={
          description
            ? description
            : 'Get your gift from santa!'
        }
      />
      <meta
        name="keywords"
        content="christmas, gift, christmas tree, santa"
      />
      <meta name="image" content={socialImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type ? type : 'website'} />
      <meta
        property="og:title"
        content={title ? title : 'Christmas tree'}
      />
      <meta
        property="og:description"
        content={
          description
            ? description
            : 'Get your gift from santa!'
        }
      />
      <meta property="og:url" content="https://christmas-tree.netlify.app" />
      <meta property="og:site_name" content="Christmas tree" />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:secure_url" content={socialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content={
          description
            ? description
            : 'Get your gift from santa!'
        }
      />
      <meta
        name="twitter:title"
        content={title ? title : 'Christmas tree'}
      />
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  );
};

export default SEO;
