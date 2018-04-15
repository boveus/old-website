import React, { Component } from 'react'
import { Image, Modal, Button } from 'react-bootstrap'

class ImageModal extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false,
      image: this.props.image,
      btntxt: this.props.btntxt,
      imgtitle: this.props.imgtitle
    }
  }

  handleClose () {
    this.setState({ show: false })
  }

  handleShow () {
    this.setState({ show: true })
  }

  render () {
    return (
      <div>
        <div className='image-modal'>
          <Button bsStyle='primary' bsSize='large' onClick={this.handleShow}>
            {this.props.btntxt}
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title> {this.props.imgtitle} </Modal.Title>
            </Modal.Header>
            <Image className='ImageModal' src={this.props.image} responsive />
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
}

export default ImageModal
