import React, { Component } from 'react'
import { PageHeader, Well } from 'react-bootstrap'
import ImageModal from '../blog/imagemodal'

class PostOne extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: this.props.title,
      body: this.props.body
    }
  }
  render () {
    return (
      <div className='blogpost' id='post1'>
        <PageHeader >
          <p> title </p>
        </PageHeader>
        <Well bsSize='large'>
          <p> Well </p>
          <ImageModal image='image/photo.png' btntxt='test' imgtitle='title test' />
        </Well>
      </div>
    )
  }
}

export default PostOne
