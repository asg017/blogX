import React from "react"
import { rhythm } from "../utils/typography"

const Footer = () => (
  <div style={{ fontSize: rhythm(0.45) }}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>, Hosted on{" "}
    <a href="https://www.github.com/asg017/blogX">GitHub</a>
  </div>
)

export default Footer
