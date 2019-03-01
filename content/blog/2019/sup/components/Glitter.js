import React from "react"
import "./Glitter.css"

export class Glitter extends React.Component {
  render() {
    return <span className="Glitter">{this.props.children}</span>
  }
}
