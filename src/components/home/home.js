import React from 'react'
import './home.css'
import axios from 'axios';
import Grid from './../common/grid'
import renderIf from 'render-if';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentWillMount() {
    axios.get(`https://reqres.in/api/users?page=2`)
      .then(res => {
        this.setState({ products: res.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="app">
        <div>
          <h2>Home</h2>
          <div className="tableStyle col-9 mx-auto">
            {renderIf(this.state.products.length > 0)(<Grid data={this.state.products} ></Grid>)}
            {renderIf(this.state.products.length <= 0)(<span>No Record found</span>)}
          </div>
        </div>
      </div>
    );
  }
}