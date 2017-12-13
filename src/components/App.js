import React, { Component } from 'react'
import logo from './../logo.svg'
import './App.css'
import Header from './header/header.js';
import Footer from './footer/footer.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className="main" id="mainContent">
        {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
