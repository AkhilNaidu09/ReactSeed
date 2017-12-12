import React from 'react'
import ReactDOM from 'react-dom';
import Home from './home/home.js'
import App from './App.js'
import Contact from './contact/contact.js'
import { createHashHistory } from 'history'; 
let history = createHashHistory();

import {
    Router,
    HashRouter,
    Route,
    Switch,
    Link
  } from 'react-router-dom';

export default class RoutesHandler extends React.Component {
    render() {
return (
    <Router history={history} >

<Switch>

    <Route pathname="App" path="/app" component={App}/>
      <Route pathname="Home" path="/home" component={Home}/>
      <Route pathname="Contact" path="/contact" component={Contact}/>


</Switch>
    </Router>
  );
}
}