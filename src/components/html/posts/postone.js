import React, { Component } from 'react'
import { PageHeader, Well } from 'react-bootstrap'
import ImageModal from '../blog/imagemodal'

class PostOne extends Component {
  render () {
    return (
      <div className='blogpost' id='post1'>
        <PageHeader >
          <p> Rails Generators </p>
        </PageHeader>
        <Well bsSize='large'>
          <p> Some compelling content will be here soon... </p>
          <ImageModal image='image/photo.png' btntxt='test' imgtitle='title test' />
        </Well>
      </div>
    )
  }
}

export default PostOne
