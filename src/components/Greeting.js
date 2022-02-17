import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
      super(props);
      console.log(0);
    }
    
    componentDidMount() {
      console.log(9);
    }
    
    componentDidUnMount() {
      console.log(5);
    }
    render() {
      console.log(1);
      return <h1>Hello World</h1>
    }
  }

export default Greeting;