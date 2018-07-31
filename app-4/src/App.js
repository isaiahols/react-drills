import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      userName:'',
      password: '',
    }
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  handleUserName(e){
    this.setState({
      userName: e.target.value
    })
  }

  handleLogin(){
    alert('User: '+this.state.userName+' Password: '+this.state.password)
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e)=>this.handleUserName(e)} />
        <input onChange={(e)=>this.handlePassword(e)} />
        <button onClick={()=>this.handleLogin()}>Login</button>
      </div>
    );
  }
}

export default App;
