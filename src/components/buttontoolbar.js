import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Buttontoolbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <Button>Default</Button>
        <Button bsStyle='primary'>Primary</Button>
        <Button bsStyle='success'>Success</Button>
        <Button bsStyle='info'>Info</Button>
        <Button bsStyle='warning'>Warning</Button>
        <Button bsStyle='danger'>Danger</Button>
        <Button bsStyle='link'>Link</Button>
      </div>
    )
  }
}

export default Buttontoolbar
