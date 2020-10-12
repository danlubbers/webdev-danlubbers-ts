/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Dan Lubbers Web Development Site',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-1733817-2',
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/JSON_Templates`,
      },
    },
  ],
};
