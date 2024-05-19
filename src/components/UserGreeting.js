import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
   
  //IF-ELSE aproach  
  /* render() {
    if (this.state.isLoggedIn){
        return <div>Hello Yasir</div>
    }
    else{
        return <div>Welcome Guest</div>
    }
  } */

// #element-variables approach
/* render(){
    let message
    if (this.state.isLoggedIn){
        message = <div>Hello Yasir</div>
    }
    else{
        message = <div>Welcome Guest</div>
    }
    return <div>{message}</div>
} */

// #ternary-operator-approach (prefferred 1)
/* render(){
    return this.state.isLoggedIn ? 
    (<div>Hello Yasir</div>) : 
    (<div>Welcome Guest</div>)
} */

// #short-circuit-operator-approach (prefferred 2)
render(){
    return this.state.isLoggedIn && <div>Hello Yasir</div>
}

}

export default UserGreeting
