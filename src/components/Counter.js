import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  
//   increment(){
//     this.setState(prevState => ({
//       counter: prevState.counter + 1
//     }))
//  }
  
//   decrement(){
//     this.setState(prevState => ({
//       counter: prevState.counter - 1
//     }))
//  }
 
 increase = () => {
  this.setState({counter: this.state.counter + 1})
  }

  decrease = () => {
    this.setState({counter: this.state.counter - 1})
    }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>{counter}</h1>
        <button
          type="button"
          onClick={this.decrease}
          className="decrement"
        >
          Decrement
        </button>
        <button
          type="button"
          onClick={this.increase}
          className="increment"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;