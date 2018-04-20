import React, { Component } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import Artbotmodal from './projects/artbotmodal'
import Aliensmodal from './projects/aliensmodal'

class Projects extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      abShow: false
    }
  }
  render () {
    let lgClose = () => this.setState({ lgShow: false })
    return (
      <Carousel className='bottompadding' interval={4000}>
        <Carousel.Item>
          <img responsive='true' alt='artbot website' src='https://user-images.githubusercontent.com/20469703/38652838-bb78ae66-3dd5-11e8-8249-3857afee0661.png' />
          <Carousel.Caption>
            <h3> Artbot </h3>
            <Button className='fa fa-github' href='https://github.com/boveus/artbot' />
            <p><span className='modaldesc'> A project built in React where you can generate random SVG graphics that are either static or animated. </span> </p>
            <Button bsStyle='primary' href='http://brandonsstewart.com/artbot/' target='_blank'> Production Link </Button>
            <br />
            <br />
            <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}> Project Description </Button>
            <Artbotmodal show={this.state.lgShow} onHide={lgClose} title={'Artbot'} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img responsive='true' alt='aliens website' src='https://user-images.githubusercontent.com/20469703/38652855-d0dfcdac-3dd5-11e8-88dc-b4c6516a7ed4.png' />
          <Carousel.Caption>
            <h3> UFO Sightings Analysis </h3>
            <Button className='fa fa-github' href='https://github.com/boveus/aliens' />
            <p> <span className='modaldesc'> This is a rails project to use a CSV containing UFO sightings to do some analysis using active record. It may expand to use other datasets to form correlations in the future. The dataset I analyzed comes from Kaggle: www.kaggle.com/NUFORC/ufo-sightings. </span> </p>
            <Button bsStyle='primary' href='https://ufosightings.herokuapp.com/' target='_blank'> Production Link </Button>
            <br />
            <br />
            <Button bsStyle='primary' onClick={() => this.setState({ lgShow: true })}> Project Description </Button>
            <Aliensmodal show={this.state.lgShow} onHide={lgClose} title={'Artbot'} />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Projects
