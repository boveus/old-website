import React, { Component } from 'react'
import './App.css'
import Topnav from './components/topnav'
import Footer from './components/footer'

class App extends Component {
  render () {
    return (
      <div>
        <Topnav />
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App
