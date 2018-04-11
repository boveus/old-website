import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Home extends Component {
  render () {
    return (
      <div>
        <h2> Welcome </h2>
        <p> I am currently in the process of rebuilding my page in react.
        Please feel free to look around as I build stuff. The project page needs a little work.
        I am not in love with the responsiveness or lack thereof.  I would also like to add a blog at some point. This site is graciously hosted on github as a repo and as a published website.
        If this page is so offensively bad that youd like to step in and help with a PR, the repo can be found below. </p>
        <Button bsStyle='primary' href='https://github.com/boveus/boveus.github.io' target='_blank'> GitHub </Button>
      </div>
    )
  }
}

export default Home
