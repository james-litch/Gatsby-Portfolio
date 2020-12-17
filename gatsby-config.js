module.exports = {
  siteMetadata: {
    title: `James Litchfield`,
    description: `Welcome to my portfolio.`,
    author: `@James Litchfield`,
    menuLinks: [
      {name: 'Home', link: '/'},
      {name: 'About', link: '/about'},
      {name: 'Portfolio', link: '/portfolio'},
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {name: `data`, path: `./src/data`},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/data/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
;
