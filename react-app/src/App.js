
import React, { Component } from 'react';
class Greetings extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

class App extends Component {
  render() {
    return <div>
      <Greetings name = "React"/>
    </div>
  }
}
export default App;