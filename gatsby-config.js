module.exports = {
  siteMetadata: {
    siteUrl: `https://webdev.danlubbers.com`,
    title: `Dan Lubbers Web Development Site`,
    lang: `en`,
    titleTemplate: ``,
    description: `Dan Lubbers is a Photographer / Retoucher / Web Developer specializing in Studio and Environmental Portraits.`,
    url: `https://webdev.danlubbers.com`,
    image: `/src/assets/images/bio.jpg`,
    twitterUsername: `@danlubbers`,
    keywords: `dan lubbers, web developer, code, coder, coding, webdev,  webdeveloper, web development, developer, development, app, app development, pwa, progressive web app, git, github, html, html5, css, css3, scss, sass, js, javascript, ts, typescript, react, reactjs, gatsby, gatsbyjs, graphql, node, nodejs, software engineer, designer, graphic, graphic design, graphic designer, ux, ui, user experience, user interface, seo, saratoga springs, ny, new york, louisville, kentucky, ky, slc, salt lake city, sandy, lehi, provo, ut, utah, local, photographer, retoucher, photography, canon, wacom, apple, mac, maxosx, osx, ios`,
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
    `gatsby-plugin-robots-txt`,
  ],
};
