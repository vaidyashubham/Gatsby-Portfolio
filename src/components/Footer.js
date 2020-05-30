import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>Copyright&copy;{new Date().getFullYear()}|all rights reserved</h4>
      </div>
    </footer>
  )
}

export default Footer
