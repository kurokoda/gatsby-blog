import { Link, PageProps } from "gatsby"
import React from "react"

import { Layout } from "../components/layout"

const AboutPage: React.FC<PageProps> = () => (
  <Layout
    description="More information about this site"
    title="About this site"
  >
    <h1>About Page</h1>
    <Link to="/">Go to home page</Link>
  </Layout>
)

export default AboutPage
