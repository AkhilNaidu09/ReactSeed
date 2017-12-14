import React from 'react'
import ReactDOM from 'react-dom';
import Home from './home/home.js'
import App from './App.js'
import Contact from './contact/contact.js'
import Login from './login/login.js'
import ContactsReducer from './contact/contact-reducer.js'
import LoginReducer from './login/login-reducer.js'
import { createHashHistory } from 'history'; 
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
  LoginReducer,
  ContactsReducer
});
let store = createStore(rootReducer)
let history = createHashHistory();

import {
    Router,
    HashRouter,
    IndexRoute,
    Redirect,
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
    <Route  exact path="/login" component={Login}/>  
    <AuthenticatedRoute path='/contact' component={Contact} />
    <AuthenticatedRoute path='/home' component={Home} />
    </div>
    </Router>
    </Provider>
  );
}
}

function AuthenticatedRoute ({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => localStorage.getItem('isLoggedin') == 'true'
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}