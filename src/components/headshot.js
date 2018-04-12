import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

class Headshot extends Component {
  constructor (props) {
    super(props)
    this.state = {
      body: <body />
    }
  }
  render () {
    return (
      <Image className='headshot' src='image/photo.png' rounded />
    )
  }
}

export default Headshot
