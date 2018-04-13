import React, { Component } from 'react'
import Post from './blog/post'

class Blog extends Component {
  render () {
    return (
      <Post title='This is a test' body='post body' />
    )
  }
}

export default Blog
