import React, { Component } from 'react';
import './App.css';

import Todo from './Componenets/Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ['stuff'],
      userInput: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  handleUpdateList() {
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ''
    });
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={e => this.handleUserInput(e)}
          value={this.state.userInput}
        />
        <button onClick={() => this.handleUpdateList()}>Add</button>
        <Todo todoList={this.state.list} />
      </div>
    );
  }
}

export default App;
