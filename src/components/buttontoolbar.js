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
        <Button bsSize='large'> Default </Button>
        <Button bsSize='large'> Home </Button>
        <Button bsSize='large'> About </Button>
        <Button bsSize='large'> Blog </Button>
      </div>
    )
  }
}

export default Buttontoolbar
