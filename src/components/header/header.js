import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import './header.css'

 class Header extends React.Component {
   
  logOutClick(){
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('UserName');
  }
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          <ul>
            <li><Link to="/home" replace>Home</Link></li>
            <li><Link to="/contact" replace>Contact</Link></li>
            <li className="rightAligned"><span>{localStorage.getItem('UserName')}</span><Link className="fa fa-power-off fa-lg padding-10" to="/login" onClick={this.logOutClick.bind(this)} replace></Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default withRouter(Header);
