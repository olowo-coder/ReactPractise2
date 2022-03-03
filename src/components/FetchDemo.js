import React, { Component } from 'react'

class FetchDemo extends Component {

      async componentDidMount() {
        const response = await fetch('https://api.github.com/users/saltnlight/repos');
        const data = await response.json();
        console.log(data);
      }
      
  render() {
    return (
      <div>FetchDemo</div>
    )
  }
}
export default FetchDemo;