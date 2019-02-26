import React from "react"
import styles from "./Glitter.module.css"

export class Glitter extends React.Component {
  render() {
    return <span className={styles.Glitter}>{this.props.children}</span>
  }
}
