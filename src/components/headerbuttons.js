import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Headerbuttons extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.show('home')
  }

  removeFromArray (value, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (value === arr[i]) {
        arr.splice(i, 1)
        return arr
      }
    }
  }

  show (element) {
    let elements = ['home', 'about', 'projects', 'blog']
    document.getElementById(element).style.display = 'block'
    let elementsArray = this.removeFromArray(element, elements)
    this.hide(elementsArray)
  }

  hide (elementsArray) {
    for (let i = 0; i < elementsArray.length; i++) {
      let element = document.getElementById(elementsArray[i])
      element.style.display = 'none'
    }
  }

  render () {
    return (
      <div className='headerButtons'>
        <Button className='topButton' bsSize='large' onClick={() => this.show('home')} > Home </Button>
        <Button className='topButton' bsSize='large' onClick={() => this.show('about')}> About </Button>
        <Button className='topButton' bsSize='large' onClick={() => this.show('blog')}> Blog </Button>
        <Button className='topButton' bsSize='large' onClick={() => this.show('projects')}> Projects </Button>
      </div>
    )
  }
}

export default Headerbuttons
