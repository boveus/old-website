import React, { Component } from 'react'
import { PageHeader, Well } from 'react-bootstrap'
import CodeModal from '../blog/codemodal'

const rbSnippet = 'class RubyCode\n  def ruby_method\n    puts \'this is a ruby method\'\n  end\nend'

class PostOne extends Component {
  render () {
    return (
      <div className='blogpost' id='post1'>
        <PageHeader >
          <p> Rails Generators </p>
        </PageHeader>
        <Well bsSize='large'>
          <p> Some compelling content will be here soon... </p>
          <CodeModal language='ruby' codesrc={rbSnippet} btntxt='Ruby Code Snippet' codetitle='ruby test' />
        </Well>
      </div>
    )
  }
}

export default PostOne
