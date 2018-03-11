import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

class About extends Component {
  render () {
    return (
      <div className='about-page'>
        <article>
          <h1>About me</h1>
          <p>
            My name is Brandon Stewart.  I am an aspiring software developer, cyclist, and beer snob.  This is a website for posting blog posts about various things, technological or otherwise.
          </p>
          <h4>Vail Pass</h4>
          <Image src='image/bike_pic.jpg' responsive rounded className='bike-pic' />;
        </article>
      </div>
    )
  }
}

export default About
