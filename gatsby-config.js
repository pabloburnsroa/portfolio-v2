module.exports = {
  siteMetadata: {
    title: `Pablo Burns-Roa`,
    siteUrl: `https://www.yourdomain.tld`,
    description: 'Personal portfolio website',
    contact: 'me@gmail.com',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
  ],
};
