module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    // START posts 
    {
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/postLayout.tsx"),
        },
      },
      resolve: "gatsby-plugin-mdx",
    },
    {
      options: {
        path: `${__dirname}/src/posts`,
      },
      resolve: "gatsby-plugin-page-creator",
    },
    {
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
      resolve: "gatsby-source-filesystem",
    },
    // END posts
    // START images
    {
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      resolve: "gatsby-source-filesystem",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // END images
  ],
  siteMetadata: {
    description: "A simple blog using Gatsby",
    image: "TODO",
    siteUrl: "http://localhost:8000/",
    title: "Gatsby Blog",
  },
}
