import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle, siteDesc, image } = site.siteMetadata

  return <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
    <meta name="description" content={description || siteDesc} />
    <meta name="image" content={image} />
  </Helmet>
}

export default SEO
