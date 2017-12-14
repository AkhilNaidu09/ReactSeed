import React from 'react'
import './login.css'
import {connect} from 'react-redux'
import { SetFormValidity } from './login-actions'
import {withRouter} from "react-router-dom";
import FormErrors from './../FormErrors';

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
  formChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: event.target.value },() => { this.validateField(name, value) });
    this.props.onFormChange(this.state);
    event.preventDefault();
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'username':
      usernameValid = value.length >= 1;
        fieldValidationErrors.username = usernameValid ? '' : ' is required';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      usernameValid: usernameValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4 margin-top-20">
        <h2>Login</h2>
        <form name="form" >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.formChange.bind(this)} />

          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.formChange.bind(this)} />

          </div>
          <div className="form-group">
            <button disabled={!this.state.formValid} className="btn btn-primary" type="button" onClick={this.loginClick.bind(this)}>Login</button>
          </div>
          <div>
            <FormErrors formErrors={this.state.formErrors} />
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
