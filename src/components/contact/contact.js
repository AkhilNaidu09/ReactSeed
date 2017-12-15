import React from 'react'
import './contact.css'

import {connect} from 'react-redux'

import { toggleHello,setState } from './contact-actions'
import { SetToastMessage } from './../app/app-action'
class Contact extends React.Component {
  componentWillMount(){

  }
  constructor(props) {
    super(props);
    this.state = this.props.app;
  }
  formChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: event.target.value });
    event.preventDefault();
  }

  render() {
    return (
      <div className="app">
        <div>
          <h2>Contact</h2>
          <form name="form" >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="errorMessage" value={this.state.errorMessage} onChange={this.formChange.bind(this)} />

          </div>
          <button onClick={this.props.onShowToast.bind(this,this.state)} type="button" value="hello">Show Toast</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state,dispatch) => {
  return {
    contacts: state.ContactsReducer,
    app:state.AppReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShowToast: (toastState) => {
      dispatch(SetToastMessage(toastState));
    }
  }
}

const ContactsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)

export default ContactsComponent;
