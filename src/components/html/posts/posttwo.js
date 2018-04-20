import React, { Component } from 'react'
import { PageHeader, Well } from 'react-bootstrap'
import ImageModal from '../blog/imagemodal'

class PostTwo extends Component {
  render () {
    return (
      <div className='blogpost' id='post2'>
        <PageHeader >
          <p> Some other post </p>
        </PageHeader>
        <Well bsSize='large'>
          <p> More content will be here as well... </p>
          <ImageModal image='image/photo.png' btntxt='test' imgtitle='title test' />
        </Well>
      </div>
    )
  }
}

export default PostTwo
