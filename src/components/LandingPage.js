import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Portfolio from './Portfolio';


export default class LandingPage extends Component {
  render() {
    return (
      <div>{routes}</div>
    )
  }
}



const routes = (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
    </Routes>
    </BrowserRouter>
)