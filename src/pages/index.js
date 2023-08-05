import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import AlgoliaDocSearch from '../components/AlgoliaDocSearch'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import { formatReadingTime } from '../utils/helpers'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}> 
        <SEO />
        <Bio />
        {posts.map(({ node }) => {
          if (process.env.NODE_ENV == 'production' && (node.fields.slug.startsWith("/_") || node.frontmatter.published === false) ) { // posts still under construction start with _
            return null;
          };
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>
                <div>Published: {String(node.frontmatter.published)}</div>
                <div>Tags: {node.frontmatter.tags}</div>
                {(new Date(node.frontmatter.date)).toDateString()}
                {` • ${formatReadingTime(node.timeToRead)}`}
              </small>
              <p
                dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
              />
            </div> 
          )
        })}
        <Footer />
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
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date
            title
            published
            tags
            spoiler
          }
        }
      }
    }
  }
`
