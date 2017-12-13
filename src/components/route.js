import React from 'react'
import ReactDOM from 'react-dom';
import Home from './home/home.js'
import App from './App.js'
import Contact from './contact/contact.js'
import ContactsReducer from './contact/contact-reducer.js'
import { createHashHistory } from 'history'; 
import { Provider } from 'react-redux'
import { createStore } from 'redux'
let store = createStore(ContactsReducer)
let history = createHashHistory();

import {
    Router,
    HashRouter,
    IndexRoute,
    Route,
    Switch,
    Link
  } from 'react-router-dom';

export default class RoutesHandler extends React.Component {
    render() {
return (
  <Provider store={store}>
    <Router history={history}>
    <div>
    <Route path="/" component={App}/>
    <Route  path="/home" component={Home}/>
    <Route  path="/contact" component={Contact}/>
    </div>
    </Router>
    </Provider>
  );
}
}