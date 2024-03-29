import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >rss</a>
        </div>
        <a
          href="https://mobile.twitter.com/svdoever"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a> &bull;{' '}
        <a
          href="https://github.com/svdoever"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a> &bull;{' '}
        <a
          href="https://stackoverflow.com/users/48050/serge-van-den-oever"
          target="_blank"
          rel="noopener noreferrer">
          stack overflow
        </a>
      </footer>
    )
  }
}

export default Footer
