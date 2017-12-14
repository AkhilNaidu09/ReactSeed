import React from 'react'
import './login.css'
import {connect} from 'react-redux'
import { SetFormValidity } from './login-actions'
import {withRouter} from "react-router-dom";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.loginForm;
  }
  loginClick() {
    if(this.state.username === 'Akhil' && this.state.password === '12345') {
      localStorage.setItem('isLoggedin', true);
      localStorage.setItem('UserName',this.state.username)
      this.props.history.push('/home');
    }
    else {
      alert('Invalid credentials');
    }
  }
  usernameChange(event) {
    this.setState({ username: event.target.value });
    this.props.onFormChange(this.state);
    event.preventDefault();
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
    this.props.onFormChange(this.state);
    event.preventDefault();
  }

  
  render() {
    return (
    <div className="col-md-4 col-md-offset-4 margin-top-20">
    <h2>Login</h2>
    <form name="form" >
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.usernameChange.bind(this)} />
           
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.passwordChange.bind(this)} />
           
        </div>
        <div className="form-group">
            <button disabled={this.props.loginForm.formValid} className="btn btn-primary" type="button" onClick={this.loginClick.bind(this)}>Login</button>
        </div>
    </form>
</div>
    );
  }
}

const mapStateToProps = (state,dispatch) => {
  return {
    loginForm: state.LoginReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFormChange: (state) => {
      dispatch(SetFormValidity(state));
    }
  }
}

const LoginComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default withRouter(LoginComponent);
