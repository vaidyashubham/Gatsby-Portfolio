import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blog/${slug}`} key={id} className="blog">
      <article className="morphism">
        <Image fluid={image.childImageSharp.fluid} className="blog-img"></Image>
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog
