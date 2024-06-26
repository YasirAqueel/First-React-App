import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext, { UserConsumer } from './userContext'

export class ComponentE extends Component {
  render() {
    return (
      <div>
        ComponentE Context {this.context}        
        <ComponentF />
      </div>
    )
  }
}

ComponentE.contextType = UserContext

export default ComponentE
