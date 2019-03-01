import React from "react"
import { Link } from "gatsby"
import Toggle from "./Toggle"
import Footer from "./Footer"
import { rhythm } from "../utils/typography"

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
          <Link to="/" className="special">
            iamprettydamn.cool blog
          </Link>
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
              window.__setPreferredTheme(e.target.checked ? "dark" : "light")
            }}
          />
        </div>
      </div>
    )
  }
  render() {
    const { children } = this.props
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
        <main style={{ minHeight: "60vh" }}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default Layout
