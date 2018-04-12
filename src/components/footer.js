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
      <footer>
        <ButtonGroup className='footerbuttons'>
          <Button className='fa fa-github' href='https://github.com/boveus' />
          <Button className='fa fa-linkedin' href='https://www.linkedin.com/in/brandon-scott-stewart/' />
          <Button className='fa fa-envelope' href='mailto:brandonsstewart88@gmail.com' />
        </ButtonGroup>
      </footer>
    )
  }
}

export default Footer
