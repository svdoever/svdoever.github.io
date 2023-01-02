import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import buyMeACoffeePic from './bmc-button.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
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
          Competence Team Lead Custom Application Development @ Macaw<br />
          2022 Technology Sitecore Most Valuable Professional<br />
          2021 Technology Sitecore Most Valuable Professional<br />
          <br />
          If you like my writing<br/>
          <a href='https://www.paypal.com/donate/?business=RQKF5AEJP7XSQ&no_recurring=0&item_name=Like+my+writings?+Buy+me+a+coffee%21&currency_code=EUR' target='_blank'>
            <img
              src={buyMeACoffeePic}
              alt={`Buy me a coffee when you like my writing!`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(6)
              }}
            />
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
