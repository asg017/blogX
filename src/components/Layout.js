import React from "react"
import { Link } from "gatsby"
import Toggle from "./Toggle"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  state = {
    theme: null,
  }
  componentDidMount() {
    this.setState({ theme: window.__theme })
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }
  renderTopMenu() {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
        <div>
          <a
            href="/"
            style={{
              color:
                this.state.theme === "light"
                  ? "var(--darkBlue)"
                  : "var(--orange)",
            }}
          >
            iamprettydamn.cool blog
          </a>
        </div>
        <div>
          <Toggle
            icons={{
              checked: (
                <img
                  src="https://raw.githubusercontent.com/gaearon/overreacted.io/master/src/assets/moon.png"
                  width="16"
                  height="16"
                  alt="moon"
                  style={{ pointerEvents: "none" }}
                />
              ),
              unchecked: (
                <img
                  src="https://raw.githubusercontent.com/gaearon/overreacted.io/master/src/assets/sun.png"
                  width="16"
                  height="16"
                  alt="sun"
                  style={{ pointerEvents: "none" }}
                />
              ),
            }}
            checked={this.state.theme === "dark"}
            onChange={e => {
              console.log(
                `toggle changed, setting to ${
                  e.target.checked ? "dark" : "light"
                }`
              )
              window.__setPreferredTheme(e.target.checked ? "dark" : "light")
            }}
          />
        </div>
      </div>
    )
  }
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          minHeight: `100vh`,
        }}
      >
        {this.renderTopMenu()}
        <header>{header}</header>
        <main style={{ minHeight: "60vh" }}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>, Hosted on{" "}
          <a href="https://www.github.com/asg017/blogX">GitHub</a>
        </footer>
      </div>
    )
  }
}

export default Layout
