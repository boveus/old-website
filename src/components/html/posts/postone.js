import React, { Component } from 'react'
import { PageHeader, Well } from 'react-bootstrap'
import CodeModal from '../blog/codemodal'
import Highlight from 'react-highlight'

const rbSnippetOne = <Highlight className='ruby'>
                  class RubyCode <br />&ensp;
                    def ruby_method <br />&ensp;&ensp;
                      puts 'this is a ruby method' <br />&ensp;
                    end <br />
                  end </Highlight>

class PostOne extends Component {
  render () {
    return (
      <div className='blogpost' id='post1'>
        <PageHeader >
          <h4> Using Structs in Ruby </h4>
        </PageHeader>
        <Well bsSize='large'>
          <p> Some compelling content will be here soon... </p>
          <CodeModal codesrc={rbSnippetOne} btntxt='Ruby Code Snippet' codetitle='ruby test' />
        </Well>
      </div>
    )
  }
}

export default PostOne
