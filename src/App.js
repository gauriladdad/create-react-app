import React from 'react';

class App extends React.Component {

  constructor(props) {
    super()
  }
  render(){
    return (
      <div>
      <h1>{this.props.val}</h1>
      <button onClick={this.props.onIncrement}>+</button>
      <button onClick={this.props.onDecrement}>-</button>
      </div> )
  }
}

export default App
