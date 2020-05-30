import React from "react"
// import logo from "../assets/logo2.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <span className="logo">
            <span className="first-letter">UI</span>
            <span className="second-letter">Tech</span>
          </span>
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>

  )
}

export default Navbar
