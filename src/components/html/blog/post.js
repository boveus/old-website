import React, { Component } from 'react'
import { PageHeader, Well } from 'react-bootstrap'

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: this.props.title,
      body: this.props.body
    }
  }
  render () {
    return (
      <div className='blog-post'>
        <PageHeader >
          <p dangerouslySetInnerHTML={{ __html: this.props.title }} />
        </PageHeader>
        <Well bsSize='large'>
          <p dangerouslySetInnerHTML={{ __html: this.props.body }} />
        </Well>
      </div>
    )
  }
}

export default Post
