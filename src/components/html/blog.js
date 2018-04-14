import React, { Component } from 'react'
import Post from './blog/post'
import { PostOne, PostTwo } from './blog/posts'
import { ToggleButton, ButtonToolbar, ToggleButtonGroup } from 'react-bootstrap'

class Blog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'initial title',
      body: 'initial body'
    }
  }
  handleChange (e) {
    if (e === 1) {
      // this.setPost(PostOne)
      this.setState({title: PostOne.title})
      this.setState({body: PostOne.body})
      console.log(this.parent)
    } else if (e === 2) {
      this.setState({title: PostTwo.title})
      this.setState({body: PostTwo.body})
      console.log(this.parent)
    }
  }
  setPost (post) {
    this.setState({title: post.title})
    this.setState({body: post.body})
  }
  render () {
    return (
      <div>
        <ButtonToolbar>
          <ToggleButtonGroup bsSize='small' type='radio' name='blogoptions' defaultValue={1} onChange={this.handleChange} >
            <ToggleButton value={1} >Post 1 (pre-checked)</ToggleButton>
            <ToggleButton value={2} >Post 2</ToggleButton>
            <ToggleButton className='hidden' value={3}>Post 3</ToggleButton>
            <ToggleButton className='hidden' value={4}>Post 4</ToggleButton>
            <ToggleButton className='hidden' value={5}>Post 5</ToggleButton>
            <ToggleButton className='hidden' value={6}>Post 6</ToggleButton>
            <ToggleButton className='hidden' value={7}>Post 7</ToggleButton>
            <ToggleButton className='hidden' value={8}>Post 8</ToggleButton>
            <ToggleButton className='hidden' value={9}>Post 9</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        <Post title={this.state.title} body={this.state.body} />
      </div>
    )
  }
}

export default Blog
