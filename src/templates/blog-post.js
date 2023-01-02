import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import Signup from '../components/Signup'
import { formatReadingTime } from '../utils/helpers'
import { rhythm, scale } from '../utils/typography'

import buyMeACoffeePic from '../components/bmc-button.png'

const GITHUB_USERNAME = 'svdoever'
const GITHUB_REPO_NAME = 'serge-weblog'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next, slug } = this.props.pageContext
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${slug.replace(
      /\//g,
      ''
    )}.md`
    const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://www.sergevandenoever.nl${slug}`)}`
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          spoiler={post.frontmatter.spoiler}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.image || null}
          tags={post.frontmatter.tags? post.frontmatter.tags.split(",").map(item => item.trim()) : []}
          slug={post.fields.slug}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(0.5),
            marginTop: rhythm(-0.8),
          }}
        >
          {(new Date(post.frontmatter.date)).toDateString()}
          {` • ${formatReadingTime(post.timeToRead)}`}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>
          <a href={discussUrl} target="_blank" rel="noopener noreferrer">
            Discuss on Twitter
          </a>
          {` • `}
          <a href={editUrl} target="_blank" rel="noopener noreferrer">
            Edit on GitHub
          </a>
        </p>
        <p
          style={{
                fontSize: '0.8em'
          }}>
          This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License. 
          You are free to share and adapt this work for non-commercial purposes, provided you give appropriate credit, 
          provide a link to the license, and indicate if changes were made. To view a copy of this license, 
          visit <a href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">http://creativecommons.org/licenses/by-nc/4.0/</a>.
        </p>
        {/* <div style={{ margin: '90px 0 40px 0' }}>
          <Signup />
        </div> */}
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: rhythm(0.25),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#0',
            }}
            to={'/'}
          >
            Serge van den Oever's weblog
          </Link>
        </h3>
        <Bio />
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date
        spoiler
        description
        image
        tags
      }
      fields {
        slug
      }
    }
  }
`
