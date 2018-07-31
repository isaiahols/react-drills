import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      userInput: '',
    }
  }

  handelUserInput(e){
    this.setState({
      userInput: e.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e)=>this.handelUserInput(e)} />
        <span>{this.state.userInput}</span>
      </div>
    );
  }
}

export default App;
