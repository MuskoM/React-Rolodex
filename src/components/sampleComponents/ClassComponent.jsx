import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        number: 1
    }
  }

  render(){
      return(
        <div className="FirstComponent">
        <p>I'm a number {this.state.number} in a class?</p>
        <div className="ControlButtons">
        <button onClick={()=>{this.setState({number: this.state.number+1})}}>Increment</button>
      <button onClick={()=>{this.setState({number: this.state.number-1})}}>Decrement</button>
        </div>
      </div>
      )
  }
}

export default App;