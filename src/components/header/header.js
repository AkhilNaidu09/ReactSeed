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
          <h2>Header</h2>
          <ul role="nav">
          <li><Link to="/home">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        </div>
      </div>
    );
  }
}
