import React, { Component } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import Artbotmodal from './projects/artbotmodal'

class Projects extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      abShow: false
    }
  }
  render () {
    let abClose = () => this.setState({ lgShow: false })
    return (
      <Carousel interval={4000}>
        <Carousel.Item>
          <img alt='artbot website' src='https://user-images.githubusercontent.com/20469703/34654700-b97546aa-f3bc-11e7-8c91-cecc6a71115c.png' />
          <Carousel.Caption>
            <h3> Artbot </h3>
            <Button className='fa fa-github' href='https://github.com/boveus/artbot' />
            <p><span className='modaldesc'> A project built in React where you can generate random SVG graphics that are either static or animated. </span> </p>
            <Button bsStyle='primary' href='http://brandonsstewart.com/artbot/' target='_blank'> Production Link </Button>
            <br />
            <br />
            <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}> Project Description </Button>
            <Artbotmodal show={this.state.lgShow} onHide={abClose} title={'Artbot'} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt='aliens website' src='https://user-images.githubusercontent.com/20469703/38647359-db57c242-3db9-11e8-8f37-88410aff5538.png' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <Button className='fa fa-github' href='https://github.com/boveus/aliens' />
            <p> <span className='modaldesc'> This is a rails project to use a CSV containing UFO sightings to do some analysis using active record. It may expand to use other datasets to form correlations in the future. The dataset I analyzed comes from Kaggle: www.kaggle.com/NUFORC/ufo-sightings. </span> </p>
            <Button bsStyle='primary' href='https://ufosightings.herokuapp.com/' target='_blank'> Production Link </Button>
            <br />
            <br />
            <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}> Project Description </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Projects
