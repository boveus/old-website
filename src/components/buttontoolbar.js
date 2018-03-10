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
      <div className='headerButtons'>
        <Button className='topButton' bsSize='large'> Default </Button>
        <Button className='topButton' bsSize='large'> Home </Button>
        <Button className='topButton' bsSize='large'> About </Button>
        <Button className='topButton' bsSize='large'> Blog </Button>
      </div>
    )
  }
}

export default Buttontoolbar
