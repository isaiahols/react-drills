import React, { Component } from 'react';
import './App.css';

import Image from './Component/Image';

class App extends Component {
  constructor() {
    super();
    this.state = { image: 'https://picsum.photos/200/300' };
  }

  render() {
    return (
      <div className="App">
        <Image photo={this.state.image} />
      </div>
    );
  }
}

export default App;
