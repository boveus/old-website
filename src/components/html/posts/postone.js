import React, { Component } from 'react'
import { PageHeader, Well } from 'react-bootstrap'
import CodeModal from '../blog/codemodal'

class PostOne extends Component {
  render () {
    return (
      <div className='blogpost' id='post1'>
        <PageHeader >
          <p> Rails Generators </p>
        </PageHeader>
        <Well bsSize='large'>
          <p> Some compelling content will be here soon... </p>
          <CodeModal codesrc='https://gist.github.com/boveus/be952dd26a11bddba340eca26cd3954b.js' btntxt='example' codetitle='title test' />
        </Well>
      </div>
    )
  }
}

export default PostOne
