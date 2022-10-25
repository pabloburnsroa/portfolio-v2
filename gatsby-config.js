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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PabloBurnsroa',
        short_name: 'PabloBurnsRoa',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
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
        name: `featured`,
        path: `${__dirname}/content/featured`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },

    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Lora`,
            file: `https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },

    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    `gatsby-plugin-styled-components`,
  ],
};
