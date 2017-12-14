import React from 'react'
import './contact.css'

import {connect} from 'react-redux'

import { toggleHello,setState } from './contact-actions'

class Contact extends React.Component {
  componentWillMount(){

  }
  constructor(props) {
    super(props);
    // if(localStorage.getItem('isLoggedin') !== 'true'){
    //   window.location.reload();
    // }
  }
  render() {
    return (
      <div className="app">
        <div>
          <h2>Contact -{this.props.contacts.FirstName}</h2>
          <button onClick={this.props.onHelloClick.bind(this,this.props.contacts)} type="button" value="hello">Hello</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state,dispatch) => {
  console.log(state);
  return {
    contacts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHelloClick: (contactsState) => {
      dispatch(toggleHello(contactsState));
    }
  }
}

const ContactsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)

export default ContactsComponent;
