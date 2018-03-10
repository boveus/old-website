import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import Headerbuttons from './headerbuttons'

class Topnav extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <nav>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand />
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Headerbuttons />
          </Navbar.Collapse>
        </Navbar>
      </nav>
    )
  }
}

export default Topnav
