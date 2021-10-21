module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    // START blog post plugins
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
    // END blog post plugins
  ],
  siteMetadata: {
    description: "A simple blog using Gatsby",
    image: "TODO",
    siteUrl: "http://localhost:8000/",
    title: "Gatsby Blog",
  },
}
