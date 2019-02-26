import React from "react"
import { Runtime, Inspector } from "@observablehq/notebook-runtime"
import notebook from "la-earthquake-app"

class Notebook extends React.Component {
  rootRef = React.createRef()

  componentDidMount() {
    const main = Runtime.load(notebook, Inspector.into(this.rootRef.current))
  }

  render() {
    console.log(this.rootRef)
    return (
      <div>
        this is nb
        <div ref={this.rootRef} />
      </div>
    )
  }
}

export default Notebook
