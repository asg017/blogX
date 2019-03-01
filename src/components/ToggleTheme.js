import React, { Children, Component } from "react"
import PropTypes from "prop-types"
import withSideEffect from "react-side-effect"

class ToggleTheme extends Component {
  render() {
    if (this.props.children) {
      return Children.only(this.props.children)
    } else {
      return null
    }
  }
}

function reducePropsToState(propsList) {
  var innermostProps = propsList[propsList.length - 1]
  if (innermostProps) {
    return innermostProps.title
  }
}

function handleStateChangeOnClient(title) {
  document.title = title || ""
}

export default withSideEffect(reducePropsToState, handleStateChangeOnClient)(
  ToggleTheme
)
