module.exports = {
    siteMetadata: {
        title: `James Litchfield`,
        description: `Welcome to my portfolio.`,
        author: `@James Litchfield`,
        menuLinks: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Projects',
                link:'/projects'
            }
        ],

        socialLinks: [
            {
                name: 'email',
                link: 'mailto:james.litchfield99@gmail.com'
            },
            {
                name: 'github',
                link: '/https://github.com/james-litch'
            },
            {
                name: 'twitter',
                link:'https://twitter.com/litchy_99'
            },
            {
                name: 'linkedIn',
                link:'https://www.linkedin.com/in/james-litchfield-34b875154/'
            }

        ]

    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                // name: `gatsby-portfolio`,
                // short_name: `portfolio`,
                // start_url: `/`,
                // background_color: `#663399`,
                // theme_color: `#663399`,
                // display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}