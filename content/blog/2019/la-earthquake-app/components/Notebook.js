import React from "react"
import { Runtime, Inspector } from "@observablehq/notebook-runtime"
import notebook from "la-earthquake-app"

class Notebook extends React.Component {
  rootRef = React.createRef()

  componentDidMount() {
    Runtime.load(notebook, Inspector.into(this.rootRef.current))
  }

  render() {
    return (
      <div>
        <div ref={this.rootRef} />
      </div>
    )
  }
}

export default Notebook
