import React, { Component } from 'react'
import PostOne from './posts/postone'
import PostTwo from './posts/posttwo'
import { ToggleButton, ButtonToolbar, ToggleButtonGroup } from 'react-bootstrap'

class Blog extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  hideAllPosts () {
    let posts = document.getElementsByClassName('blogpost')
    let i = 0
    let l = posts.length
    for (i; i < l; i++) {
      posts[i].style.display = 'none'
    }
  }
  handleChange (e) {
    this.hideAllPosts()
    document.getElementById(`post${e}`).style.display = 'block'
  }

  render () {
    return (
      <div>
        <ButtonToolbar>
          <ToggleButtonGroup bsSize='large' type='radio' name='blogoptions' onChange={this.handleChange} >
            <ToggleButton value={1} className='btn btn-link'> Rails Generators </ToggleButton>
            <ToggleButton value={2} className='btn btn-link'> Some other exciting content </ToggleButton>
            <ToggleButton className='hidden' value={3}>Post 3</ToggleButton>
            <ToggleButton className='hidden' value={4}>Post 4</ToggleButton>
            <ToggleButton className='hidden' value={5}>Post 5</ToggleButton>
            <ToggleButton className='hidden' value={6}>Post 6</ToggleButton>
            <ToggleButton className='hidden' value={7}>Post 7</ToggleButton>
            <ToggleButton className='hidden' value={8}>Post 8</ToggleButton>
            <ToggleButton className='hidden' value={9}>Post 9</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        <PostOne id='post1' />
        <PostTwo id='post2' />
      </div>
    )
  }
}

export default Blog
