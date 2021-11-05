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
    'gatsby-transformer-sharp'

  ],
}
