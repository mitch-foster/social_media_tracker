import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Chart from './Chart';

class ChartPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        user: [],
        loading: true
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3333/api/user')
    .then((response)=>{
      console.log('test'); 
      this.setState({user: response.data, loading: false})
    })
    .catch(err=>{console.log('error', err)})
  }

  render() {
    if(this.state.loading === true){
      return (
        <div>
           <a href='http://localhost:3333/auth/twitter'>
          <button>
            Log in to Twitter
          </button>
        </a>
        </div>
      );
    }
    return (
      <div>
        Welcome {this.state.user}!
        <br/>
        <Chart/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    test: state.test
  }
}

export default connect(mapStateToProps)(ChartPage);