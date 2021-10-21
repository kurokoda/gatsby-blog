import { PageProps, Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import { Layout } from "../components/layout"
import { imageWrapper } from "../styles/index.module.css"

interface Post {
  id: string
  slug: string
  frontmatter: {
    title: string
    date: string
    description: string
  }
}

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            date(fromNow: true)
            description
          }
        }
      }
    }
  `)

  const posts = data.allMdx.nodes

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          alt="An adorable astronaut"
          height={500}
          placeholder="dominantColor"
          src="../images/gatsby-astronaut.png"
          width={500}
        />
      </div>
      <h1>Home Page</h1>
      <Link to="/about">Go to about page</Link>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post: Post) => {
          return (
            <li>
              <Link to={post.slug}>{post.frontmatter.title}</Link>
              <small>posted {post.frontmatter.date}</small>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
