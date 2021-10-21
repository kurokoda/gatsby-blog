import { PageProps, Link } from "gatsby"
import React from "react"

import { Layout } from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Link to="/about">Go to about page</Link>
    </Layout>
  )
}

export default IndexPage
