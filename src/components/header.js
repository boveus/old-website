import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Home from './html/home'
import Blog from './html/blog'
import About from './html/about'
import Projects from './html/projects'

class Header extends Component {
  render () {
    return (
      <div id='header'>
        <Tabs defaultActiveKey={1} animation={false} className='tab' id='header-tabs'>
          <Tab eventKey={1} title='Home'>
            <Home />
          </Tab>
          <Tab eventKey={2} title='Blog'>
            <Blog />
          </Tab>
          <Tab eventKey={3} title='Projects'>
            <Projects />
          </Tab>
          <Tab eventKey={4} title='About'>
            <About />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Header
