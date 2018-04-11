import { Modal, Button } from 'react-bootstrap'
import React, { Component } from 'react'

class Artbotmodal extends Component {
  render () {
    return (
      <Modal
        {...this.props}
        bsSize='large'
        aria-labelledby='contained-modal-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'> Artbot </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Artbot</h4>
          <p>
            So ideally
          </p>
          <p>
            This is the part
          </p>
          <p>
            where I dazzle you
          </p>
          <p>
            with all of the technology that I used on this project.
          </p>
          <p>
            That part still
          </p>
          <p>
            needs to be completed.
          </p>
          <p>
            Please check back again, later.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Artbotmodal
