import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';

//state = 0 - default state
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state;
  }
}

const store = createStore(counter)

store.subscribe(() => {
	ReactDOM.render(
	<App 
		val={store.getState()}
      	onIncrement={() => 
        store.dispatch({ type: 'INCREMENT' })
      	}
      	onDecrement={() => 
        store.dispatch({ type: 'DECREMENT' })
      }
    />, 
	document.getElementById('root')
)});

store.dispatch({type : ''})
//to ensure default state is firing subscribe event


/*
ALL IN ONE CLASS
import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';

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



const render = () => {
  ReactDOM.render(
    <App 
      val={store.getState()}
      onIncrement={() => 
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() => 
        store.dispatch({
          type: 'DECREMENT'
        })
      }/>, 
    document.getElementById('root'))
}
store.subscribe((render))

render()
*/


