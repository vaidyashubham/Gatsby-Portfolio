import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: {eq:"ggg.png"}){
      childImageSharp{ 
        fluid{ 
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h2>Hi</h2>
            <div className="underline"></div>
            <h1>I'm Shubham</h1>
            <h4>A proud Web Designer and Developer</h4>
            <Link to="/contact" className="btn">Contact Me</Link>
            <SocialLinks />
          </div>
        </article>
        <Image className="hero-img" fluid={fluid}></Image>
      </div>
    </header>
  )
}

export default Hero
