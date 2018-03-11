import React, { Component } from 'react'

class Blog extends Component {
  render () {
    return (
      <article>
        <h2>General Computer Science Topics</h2>
        <a href='recursion-blog-post.html'>Recursion</a>
        <h2>Network Security</h2>
        <a href='security-resources.html'>Getting Started in Network Security - Gist</a>
        <h2>Thoughts on my Open Source Contribution </h2>
        <a href='open-source.html'>My first open source PR</a>
      </article>
    )
  }
}

export default Blog
