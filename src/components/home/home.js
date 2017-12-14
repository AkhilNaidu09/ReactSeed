import React from 'react'
import './home.css'
export default class Home extends React.Component {
  constructor(props){
super(props);
// if(localStorage.getItem('isLoggedin') !== 'true'){
//   window.location.reload();
// }
  }
  render() {
    return (
      <div className="app">
        <div>
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}
