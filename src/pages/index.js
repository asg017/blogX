import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { timeFormat } from "d3-time-format"
import styles from "./BlogIndex.module.css"

const formatPostDate = d => {
  const date = new Date(d)
  return timeFormat("%Y-%m-%d")(date)
}
console.warn(4, styles)
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

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    console.log(this.props)
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    console.log(posts)
    return (
      <Layout location={this.props.location} title={""}>
        <SEO title="All posts" keywords={[`alex garcia`, `blog`, `tech`]} />
        <div style={{ marginBottom: "30px" }}>
          <a href="https://iamprettydamn.cool">iamprettydamn.cool</a>
        </div>
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