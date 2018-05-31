module.exports = {
  siteMetadata: {
    title: 'Mediasapiens',
    email: 'hello@mediasapiens.de',
    phone: '+49 40 22817196-1',
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
