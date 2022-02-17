import "./App.css";
import React, { Component } from 'react';
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import MouseContainer from "./components/MouseContainer";
import IntervalCounter from "./components/IntervalCounter";
import DataFetching from "./components/DataFetching";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import ProductDetail from "./components/ProductDetail";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render(){

    return (
      <div className="App">
        {/* <Greeting/> */}
        {/* <Header branding="Contact Manager" /> */}
        {/* <MouseContainer/> */}
        {/* <IntervalCounter /> */}
        {/* <DataFetching/> */}
        {/* <Counter/> */}
        <ProductDetail />
        <div className="container">
          {/* <Contacts/> */}
        </div>
      </div>
    );
  }
}

export default App;
