import React, { Component } from 'react'
import logo from './../logo.svg'
import './App.css'
import Header from './header/header.js';
import Footer from './footer/footer.js';
import renderIf from 'render-if';
import {withRouter} from "react-router-dom";
import { Toast } from './common/toast/toast';
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
      this.state = {
        ErrorMessage:'Unable to load the data !!!!!'
      };
  }
  render() {
    return (
      <div className="app">
        {renderIf(localStorage.getItem('isLoggedin') == 'true' )(<Header></Header>)}
        
        <div className="main" id="mainContent">
        <Toast errorMessage={this.state.ErrorMessage}></Toast>
        {this.props.children}
        </div>
        {renderIf(localStorage.getItem('isLoggedin') == 'true' )(<Footer></Footer>)}
        
      </div>
    )
  }
}

export default withRouter(App)
