import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = props => {
  const data = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `)

  const defaults = data?.site?.siteMetadata

  const description = props.description || defaults.description
  const image = new URL(
    props.image || defaults.image,
    defaults.siteUrl
  ).toString()
  const title = props.title || defaults.title
  const url = new URL(props.path || "/", defaults.siteUrl).toString()

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      
      <meta property="twitter:card" content="summary_large_imnage" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:title" content={title} />
      
      {image && <meta name="image" content={image} />}
      {image && <meta name="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}

export { SEO }
