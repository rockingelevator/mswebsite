module.exports = {
  siteMetadata: {
    title: 'Mediasapiens',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans:300,400,600,700`],
      },
    },
  ],
};
