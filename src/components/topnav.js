import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import Buttontoolbar from './buttontoolbar'

class Topnav extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (

      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand />
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Buttontoolbar />
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Topnav
