module.exports = {
  siteMetadata: {
    title: `Simpler Starter`,
    description: `A simple starter for Gatsby that doesn't really enforce anything.`,
    author: `@chrish-d`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./static/images/` },
    },
  ],
};
