import React from "react"
import { Link, PageProps } from "gatsby"

import { Layout } from "../components/layout"

const AboutPage: React.FC<PageProps> = () => (
  <Layout
    description="More information about this site"
    title="About this site"
  >
    <h1>About Page</h1>
    <Link to="/">Go Home</Link>
  </Layout>
)

export default AboutPage
