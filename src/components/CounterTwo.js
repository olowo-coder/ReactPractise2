import React from 'react';

export const doIncrement = state =>
  ({ counter: state.counter + 1 });

export const doDecrement = state =>
  ({ counter: state.counter - 1 });

export default class CounterTwo extends React.Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(doIncrement);
  }

  onDecrement = () => {
    this.setState(doDecrement);
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
      </div>
    );
  }
}