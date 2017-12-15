import React from 'react'
import './home.css'
import axios from 'axios';
import Grid from './../common/grid/grid'
import renderIf from 'render-if';
import { SyncLoader 
 } from 'react-spinners';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true
    };
  }
  componentWillMount() {
    axios.get(`https://reqres.in/api/users?page=2`)
      .then(res => {
        this.setState({ products: res.data.data });
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
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
        <div className='loadingBar sweet-loading'>
        <SyncLoader
          color={'#123abc'} 
          loading={this.state.loading} 
        />
      </div>
      </div>
    );
  }
}