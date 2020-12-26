module.exports = {
  siteMetadata: {
    title: "Christmas tree",
    siteUrl: 'https://christmas-gift.netlify.app',
    app: {
      url: 'https://christmas-gift.netlify.app',
      title: 'Christmas tree',
      description:
        'Get your gift from santa!',
      titleTemplate: 'Christmas tree',
      subtitle: 'Get your gift from santa!',
      copyright: '© All rights reserved.',
    },
  },
  flags : { DEV_SSR: true },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/christmas-tree-icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
  ],
};
