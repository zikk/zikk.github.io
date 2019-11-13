module.exports = {
    siteMetadata: {
        title: `ZIKK.INFO | Zakaria Abdelaziz`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-152405139-1`
            }
        }
    ]
}