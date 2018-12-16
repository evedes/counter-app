import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Counter = ({count}) => {
  return (
    <div className="m-3">
      <h1>{count}</h1>
    </div>
  );
}

class App extends Component {
  state = {
    count: 0
  };

  updateCounter = (type) => {
    const { state } = this;
    switch (type) {
      case 'INCREMENT': 
        return this.setState(state => {
          return {
            count: state.count + 1,
          }
        })
      case 'DECREMENT':
        return this.setState(state => {
          return {
            count: state.count - 1,
          }
        })
      default:
        return state;
    }
  }

  renderButtons = () => {
    return (
      <div>
        <button
          className="mx-2 btn btn-danger shadow"
          onClick={() => this.updateCounter('INCREMENT')}>
          +
        </button>
        <button
          className="mx-2 btn btn-danger shadow"
          onClick={() => this.updateCounter('DECREMENT')}>
          -
        </button>
      </div>
    )
  }

  render() {
    const { count } = this.state;
    return (
      <div className="text-center">
        <h1>The Counter App</h1>
        <h2>Introduction to Redux</h2>
        <Counter count={count} />
        { this.renderButtons() }
      </div>
    );
  }
}

export default App;
