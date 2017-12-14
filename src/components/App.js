import React, { Component } from 'react'
import logo from './../logo.svg'
import './App.css'
import Header from './header/header.js';
import Footer from './footer/footer.js';
import renderIf from 'render-if';
import {withRouter} from "react-router-dom";
class App extends Component {
  componentWillMount(){

  }
  constructor(props){
    super(props);
    if(localStorage.getItem('isLoggedin') !== 'true'){
         this.props.history.push('/login');
      }
      else {
        this.props.history.push('/home');
      }
  }
  render() {
    return (
      <div className="app">
        {renderIf(localStorage.getItem('isLoggedin') == 'true' )(<Header></Header>)}
        <div className="main" id="mainContent">
        {this.props.children}
        </div>
        {renderIf(localStorage.getItem('isLoggedin') == 'true' )(<Footer></Footer>)}
        
      </div>
    )
  }
}

export default withRouter(App)
