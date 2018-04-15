import React, { Component } from 'react'
import { PageHeader, Well } from 'react-bootstrap'
import ImageModal from '../blog/imagemodal'

class PostTwo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: this.props.title,
      body: this.props.body
    }
  }
  render () {
    return (
      <div className='blogpost' id='post2'>
        <PageHeader >
          <p> title two </p>
        </PageHeader>
        <Well bsSize='large'>
          <p> Well well well </p>
          <ImageModal image='image/photo.png' btntxt='test' imgtitle='title test' />
        </Well>
      </div>
    )
  }
}

export default PostTwo
