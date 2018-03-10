import React, { Component } from 'react'
import './App.css'
import Topnav from './components/topnav'
import Buttontoolbar from './components/buttontoolbar'

class App extends Component {
  render () {
    return (
      <div>
        <Topnav />
        <Buttontoolbar />
      </div>
    )
  }
}

export default App
