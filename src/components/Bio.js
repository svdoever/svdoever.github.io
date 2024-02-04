import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import { MyDocSearch } from './MyDocSearch'

class Bio extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            display: 'flex',
            marginBottom: 0,
          }}
        >
          <img
            src={profilePic}
            alt={`Serge van den Oever`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(4),
              height: rhythm(4),
              borderRadius: "50%"
            }}
          />
          <p style={{ maxWidth: rhythm(20) }}>
            Personal blog by Serge van den Oever - als je maar lol hebt...<br />
            Twitter: <a href="https://twitter.com/svdoever" target="_blank" rel="noopener noreferrer">@svdoever</a><br />
            LinkedIn: <a href="https://www.linkedin.com/in/sergevandenoever/" target="_blank" rel="noopener noreferrer">Serge van den Oever</a> - <a href="https://www.linkedin.com/in/sergevandenoever/detail/recent-activity/posts/" target="_blank" rel="noopener noreferrer">articles on LinkedIn</a><br />
            <br />
            Technology Consultant @ Macaw<br />
            2021-2023 Sitecore Technology MVP<br />
          </p>
        </div>
        <MyDocSearch />
      </>

    )
  }
}

export default Bio
