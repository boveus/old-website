import React, { Component } from 'react'
import './App.css'
import Topnav from './components/topnav'
import Footer from './components/footer'

class App extends Component {
  render () {
    return (
      <div>
        <nav>
          <Topnav />
        </nav>
        <Footer />
      </div>
    )
  }
}

export default App
