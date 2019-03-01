import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { rhythm, scale } from "../utils/typography"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { MDXProvider } from "@mdx-js/tag"
import { timeFormat } from "d3-time-format"

const formatPostDate = d => {
  const date = new Date(d)
  return timeFormat("%A, %B %e, %Y")(date)
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const author = this.props.data.site.siteMetadata.author
    const { previous, next } = this.props.pageContext
    console.log(this.props)
    return (
      <Layout location={this.props.location} title={""}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1 style={{ marginTop: rhythm(1) }}>{post.frontmatter.title}</h1>
        <a href="https://iamprettydamn.cool">{author}</a>
        <div
          style={{
            ...scale(-1 / 5),
            marginBottom: rhythm(1),
            //marginTop: rhythm(-1),
          }}
        >
          <p>{formatPostDate(post.frontmatter.date)}</p>
        </div>
        <MDXProvider
          components={{
            h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
            wrapper: "article",
          }}
        >
          <div>{this.props.children}</div>
          <MDXRenderer {...this.props}>
            {this.props.data.mdx.code.body}
          </MDXRenderer>
        </MDXProvider>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul style={{ listStyle: `none` }}>
          {previous && previous.frontmatter && previous.frontmatter.title && (
            <li>
              Previous:{" "}
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && next.frontmatter && next.frontmatter.title && (
            <li>
              Next:{" "}
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            </li>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      code {
        body
      }
      frontmatter {
        title
        date
      }
    }
  }
`
