/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'The Abstract Machine',
    description: 'The Most Beautiful Computational Concepts, Visualised',
    author: 'lovisafsundin@gmail.com'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {}
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `concepts`,
        path: `${__dirname}/src/concepts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    }
  ],
}
