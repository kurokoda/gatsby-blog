import { PageProps, Link } from "gatsby"
import React from "react"

import { Layout } from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Hello Gatsby</h1>
      <Link to="/about">About this site</Link>
    </Layout>
  )
}

export default IndexPage
