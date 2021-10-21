import { Link } from "gatsby"
import React from "react"

import { Layout } from "./layout"

function PostLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter
  return (
    <Layout description={description} title={title}>
      {children}
      <Link to="/">&larr;Back</Link>
    </Layout>
  )
}

export default PostLayout
