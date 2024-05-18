import React, { Component } from 'react'

class ClassClick extends Component {
    classHandler(){
        console.log('class clicked')
    }

  render() {
    return (
      <div>
        <button onClick={this.classHandler}>Class Click me</button>
      </div>
    )
  }
}

export default ClassClick
