import React, { Component } from 'react'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      body: <body />
    }
  }
  render () {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <body />
        </div>
      </div>
    )
  }
}

export default Body
