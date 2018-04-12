import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  render () {
    return (
      <div>
        <div className='row'>
          <Header />
        </div>
        <div className='row row-centered'>
          <div className='col-md-4' />
          <div className='col-md-4'>
            <Footer />
          </div>
          <div className='col-md-4' />
        </div>
      </div>
    )
  }
}

export default App
