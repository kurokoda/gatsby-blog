import "../styles/global.css"
import { header, content } from "../styles/layout.module.css"

import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"

import { SEO } from "./seo"

interface LayoutProps {
  children: React.ReactNode

  description?: string
  image?: string
  path?: string
  title?: string
}

const Layout = ({ children, title, description, image, path }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query getSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteMetadata = data?.site?.siteMetadata ?? {}

  return (
    <>
      <SEO description={description} image={image} path={path} title={title} />
      <header className={header}>
        <Link to="/">{siteMetadata.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className={content}>{children}</main>
    </>
  )
}

export { Layout }
