import React from 'react'
import './login.css'
import {connect} from 'react-redux'
import { toggleHello,setState } from './login-actions'
import {withRouter} from "react-router-dom";

class Login extends React.Component {

  constructor(props) {
    super(props);
   
  }
  loginClick(){
    localStorage.setItem('isLoggedin',true);
    this.props.history.push('/home');
  }
  render() {
    return (
    <div className="col-md-4 col-md-offset-4 margin-top-20">
    <h2>Login</h2>
    <form name="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username"  onChange={this.handleChange} />
           
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"  onChange={this.handleChange} />
           
        </div>
        <div className="form-group">
        
            <button className="btn btn-primary" type="button" onClick={this.loginClick.bind(this)}>Login</button>
        </div>
    </form>
</div>
    );
  }
}

const mapStateToProps = (state,dispatch) => {
  return {
    contacts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHelloClick: (contactsState) => {
    }
  }
}

const LoginComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default withRouter(LoginComponent);
