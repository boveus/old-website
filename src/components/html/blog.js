import React, { Component } from 'react'
import PostOne from './posts/postone'
import PostTwo from './posts/posttwo'
import { ToggleButton, ButtonToolbar, ToggleButtonGroup } from 'react-bootstrap'

class Blog extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      title: 'Welcome to my blog',
      body: 'Select a post title above to browse.'
    }
  }
  hideAllPosts () {
    let myClasses = document.getElementsByClassName('blogpost')
    let i = 0
    let l = myClasses.length

    for (i; i < l; i++) {
      myClasses[i].style.display = 'none'
    }
  }
  handleChange (e) {
    if (e === 1) {
      this.setState({post: 1})
      this.hideAllPosts()
      document.getElementById('post1').style.display = 'block'
    } else if (e === 2) {
      this.hideAllPosts()
      document.getElementById('post2').style.display = 'block'
    }
  }

  render () {
    return (
      <div>
        <ButtonToolbar>
          <ToggleButtonGroup bsSize='small' type='radio' name='blogoptions' defaultValue={1} onChange={this.handleChange} >
            <ToggleButton value={1} >Post 1 </ToggleButton>
            <br />
            <br />
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
        <PostOne id='post1' />
        <PostTwo id='post2' />
      </div>
    )
  }
}

export default Blog
