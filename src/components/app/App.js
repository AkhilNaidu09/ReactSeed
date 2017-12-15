import React, { Component } from 'react'
import './App.css'
import Header from './../header/header.js';
import Footer from './../footer/footer.js';
import renderIf from 'render-if';
import {withRouter} from "react-router-dom";
import { Toast } from './../common/toast/toast';
import { SetToastMessage } from './app-action'
import {connect} from 'react-redux'

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
      this.state = this.props.app;
  }
  render() {
    return (
      <div className="app">
        {renderIf(localStorage.getItem('isLoggedin') == 'true' )(
        <Header></Header>
        )}
        
        <div className="main" id="mainContent">
        {renderIf(localStorage.getItem('isLoggedin') == 'true')(<Toast errorMessage={this.state.errorMessage}></Toast>)}
        {this.props.children}
        </div>
        {renderIf(localStorage.getItem('isLoggedin') == 'true' )(<Footer></Footer>)}
        
      </div>
    )
  }
}

const mapStateToProps = (state,dispatch) => {
  return {
    app: state.AppReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const AppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App))

export default AppComponent;