import React from 'react'
import './header.css'
import {
  Link
} from 'react-router-dom';
export default class Header extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="header">
        <ul>
        <li><Link to="/home" replace>About</Link></li>
        <li><Link to="/contact" replace>Contact</Link></li>
        </ul>
        </div>
      </div>
    );
  }
}
