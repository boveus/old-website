import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <ButtonGroup className='footerbuttons'>
        <Button className='fa fa-github' />
        <Button className='fa fa-linkedin' />
        <Button className='fa fa-envelope' />
      </ButtonGroup>
    )
  }
}

export default Footer
