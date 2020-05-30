import React from "react"
import { FaCode, FaPencilRuler, FaSitemap } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I like to code things from scratch, and enjoy bringing ideas to life in the browser`,
  },
  {
    id: 2,
    icon: <FaPencilRuler className="service-icon" />,
    title: "web design",
    text: `I value simple content structure, clean design patterns, and thoughtful interactions.`,
  },
  // {
  //   id: 3,
  //   icon: <FaGraduationCap className="service-icon" />,
  //   title: "academic projects",
  //   text: `I offer best academic projects to the students. Projects based on emebeded system, web solutions, etc will be done in the best possible time.`,
  // },
  {
    id: 3,
    icon: <FaSitemap className="service-icon" />,
    title: "web scraping",
    text: `Depends on your requirements that how much data you want to generate, according to that I provide solutions`,
  }
]
