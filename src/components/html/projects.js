import React, { Component } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import Projectmodal from './projects/projectmodal'

class Projects extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      lgShow: false
    }
  }
  render () {
    let lgClose = () => this.setState({ lgShow: false })
    return (
      <Carousel interval={4000}>
        <Carousel.Item>
          <img width={900} height={500} alt='500x500' src='image/water1.jpeg' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <Button className='fa fa-github' href='https://github.com/boveus' />
            <p> Lorem ipsum blah blah basic overview </p>
            <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}> Project Description </Button>
            <Projectmodal show={this.state.lgShow} onHide={lgClose} title={'Artbot'} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt='500x500' src='image/water2.jpeg' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <Button className='fa fa-github' href='https://github.com/boveus' />
            <p> Lorem ipsum blah blah basic overview </p>
            <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}> Project Description </Button>
            <Projectmodal show={this.state.lgShow} onHide={lgClose} title={'Project2'} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt='500x500' src='image/water3.jpeg' />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <Button className='fa fa-github' href='https://github.com/boveus' />
            <p> Lorem ipsum blah blah basic overview </p>
            <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}> Project Description </Button>
            <Projectmodal show={this.state.lgShow} onHide={lgClose} title={'Project3'} />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Projects
