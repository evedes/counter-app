import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

const Counter = ({count}) => {
  return (
    <div className="m-3">
      <h1>{count}</h1>
    </div>
  );
}

const updateCounter = (dispatch, type) => {
  return dispatch({type});
}

class App extends Component {
  renderButtons = () => {
    const { dispatch } = this.props;
    return (
      <div>
        <button
          className="mx-2 btn btn-danger shadow"
          onClick={() => updateCounter(dispatch, 'INCREMENT')}>
          +
        </button>
        <button
          className="mx-2 btn btn-danger shadow"
          onClick={() => updateCounter(dispatch, 'DECREMENT')}>
          -
        </button>
      </div>
    )
  }

  render() {
    const { count } = this.props;
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

const mapStateToProps = state => {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(App);
