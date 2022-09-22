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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blogs`,
        path: `${__dirname}/content/blogs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },

    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    `gatsby-plugin-styled-components`,
  ],
};
