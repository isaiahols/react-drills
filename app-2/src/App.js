import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      array: ['one','two','three','four']
    }
  }

  render() {
    let printing = this.state.array.map((val,i)=><h2 id={i}>{val}</h2>)

    return (
      <div className="App">
        {printing}
      </div>
    );
  }
}

export default App;
