import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      array: ['one','two','three','four','five','six','seven'],
      userInput: '',
    }
  }

  handleInput(e){
    let filtering = this.state.array.filter((val)=> val.includes(e.target.value))
    this.setState({
      array: filtering,
    })
  }  


  render() {
    let printing=this.state.array.map((val,i)=> <h2 id={i}>{val}</h2> )

    return (
      <div className="App">
        <input onChange={(e)=>this.handleInput(e)}/>
        {printing}
      </div>
    );
  }
}

export default App;
