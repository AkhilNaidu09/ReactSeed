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
    this.state = this.props.contacts;
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
          <div className="card formTextAlign mx-auto col-4">
          <div className="form-group">
            <label htmlFor="FistName">Fist Name</label>
            <input type="text" className="form-control" name="errorMessage" value={this.state.FirstName} onChange={this.formChange.bind(this)} />

          </div>
          <div className="form-group">
            <label htmlFor="LastName">Last Name</label>
            <input type="text" className="form-control" name="errorMessage" value={this.state.LastName} onChange={this.formChange.bind(this)} />

          </div>
          <div className="form-group">
            <label htmlFor="Email">Email Address</label>
            <input type="text" className="form-control" name="errorMessage" value={this.state.Email} onChange={this.formChange.bind(this)} />

          </div>
          <div className="form-group">
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input type="text" className="form-control" name="errorMessage" value={this.state.PhoneNumber} onChange={this.formChange.bind(this)} />

          </div>
          <div className="form-group">
            <label htmlFor="ZipCode">Zip Code</label>
            <input type="text" className="form-control" name="errorMessage" value={this.state.ZipCode} onChange={this.formChange.bind(this)} />

          </div>
          <button className="btn btn-secondary" onClick={this.props.onShowToast.bind(this,this.state)} type="button" value="hello">Show Toast</button>
          </div>
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
