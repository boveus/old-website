import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Highlight from 'react-highlight'

class CodeModal extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false,
      codesrc: this.props.codesrc,
      btntxt: this.props.btntxt,
      codetitle: this.props.codetitle,
      language: this.props.language
    }
  }

  handleClose () {
    this.setState({ show: false })
  }

  handleShow () {
    this.setState({ show: true })
    this.forceUpdate()
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
              <Modal.Title> {this.props.codetitle} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Highlight className={this.props.language}>
                  {this.props.codesrc}
                </Highlight>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
}

export default CodeModal
