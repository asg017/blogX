import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import { timeFormat } from "d3-time-format"
import styles from "./BlogIndex.module.css"
import { scale } from "../utils/typography"

const formatPostDate = d => {
  const date = new Date(d)
  return timeFormat("%Y-%m-%d")(date)
}
const PostsList = ({ posts }) => (
  <div className={styles.postList}>
    {posts.map(({ node }, i) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <React.Fragment key={node.fields.slug}>
          <div>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </div>
          <div>{formatPostDate(node.frontmatter.date)}</div>
        </React.Fragment>
      )
    })}
  </div>
)

const Hi = () => (
  <div style={{ marginTop: "15px", marginBottom: "20px", ...scale(-1 / 8) }}>
    👋🏼 I'm Alex, here's some posts I've written. Here's my{" "}
    <a href="https://iamprettydamn.cool" className="special">
      site
    </a>{" "}
    with more stuff about me
  </div>
)
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges
    return (
      <Layout location={this.props.location} title={""}>
        <SEO title="Blog" keywords={[`alex garcia`, `blog`, `tech`]} />
        <Hi />
        <PostsList posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/index.md/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fileAbsolutePath
          parent {
            id
          }
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
