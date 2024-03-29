import path from 'path'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import profilePic from './profile-pic.jpg'

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        googleSiteVerification
        social {
          twitter
        }
      }
    }
  }
`

function SEO({ meta, title, date, spoiler, description, image, tags, slug }) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { siteMetadata } = data.site
        const metaDescription = description || siteMetadata.description
        const metaImage = image
          ? image.startsWith('http')
            ? image
            : path.join(siteMetadata.siteUrl, image)
          : path.join(siteMetadata.siteUrl, profilePic)
        const url = `${siteMetadata.siteUrl}${slug}`
        return (
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            {...(title
              ? {
                titleTemplate: `%s - ${siteMetadata.title}`,
                title,
              }
              : {
                title: siteMetadata.title,
              })}
            meta={[
              {
                name: 'google-site-verification',
                content: siteMetadata.googleSiteVerification
              },
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'article',
              },
              {
                property: 'og:url',
                content: url,
              },
              {
                property: 'og:title',
                content: title || siteMetadata.title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:image',
                content: metaImage,
              },
              {
                property: 'og:image:type',
                content: metaImage.endsWith('jpg') ? 'image/jpeg' : 'image/png',
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                name: 'twitter:creator',
                content: siteMetadata.social.twitter,
              },
              {
                name: 'twitter:title',
                content: title || siteMetadata.title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
              {
                name: 'twitter:image',
                content: metaImage,
              },
            ]
              .concat(meta)}
          >
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
            <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  title: '',
  spoiler: '',
  description: '',
  image: '',
  tags: [],
  slug: '',
}

SEO.propTypes = {
  meta: PropTypes.array,
  title: PropTypes.string,
  date: PropTypes.string,
  spoiler: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  slug: PropTypes.string,
}

export default SEO
