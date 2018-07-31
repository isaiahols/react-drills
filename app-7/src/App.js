import React, { Component } from 'react';
import './App.css';

import NewTask from './Components/NewTask';
import Todo from './Components/Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      listArray: []
    };
    this.updateListArray = this.updateListArray.bind(this);
    // this.updateUserInput = this.updateUserInput.bind(this);
  }

  updateUserInput(e) {
    this.setState({ userInput: e.target.value });
  }

  updateListArray() {
    let newArray = [...this.state.listArray, this.state.userInput];
    this.setState({
      userInput: '',
      listArray: newArray
    });
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={e => this.updateUserInput(e)}
          value={this.state.userInput}
        />
        <NewTask update={this.updateListArray} />
        <Todo todoList={this.state.listArray} />
      </div>
    );
  }
}

export default App;
