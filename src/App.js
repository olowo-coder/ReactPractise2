import "./App.css";
import React, { Component } from 'react';
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import MouseContainer from "./components/MouseContainer";
import IntervalCounter from "./components/IntervalCounter";
import DataFetching from "./components/DataFetching";
import Counter from "./components/Counter";
import OrderedList from "./components/OrderedList";
import ProductDetail from "./components/ProductDetail";
import Unique from "./components/UniqueList";
import ComponentC from "./components/ComponentC";
import CounterMemo from "./components/CounterMemo";
import FocusInput from "./components/FocusInput";
import LandingPage from "./components/LandingPage";
import Heading from "./components/TestTwo";
import CounterReducer from "./components/CounterReducer";

import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

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
        {/* <OrderedList/>  */}
        {/* <ProductDetail /> */}
        {/* <Unique/> */}
        {/* <UserContext.Provider value={"happy"}>
          <ChannelContext.Provider value={"coding"}>
            <ComponentC/>
          </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* <CounterMemo/> */}
        {/* <FocusInput /> */}
        {/* <Heading/> */}
        {/* <LandingPage/> */}
        <CounterReducer />
        <div className="container">
          {/* <Contacts/> */}
        </div>
      </div>
    );
  }
}

export default App;
