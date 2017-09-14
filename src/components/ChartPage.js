import React, { Component } from 'react';
import {connect} from 'react-redux';

import Chart from './Chart';

class ChartPage extends Component {
  render() {
    return (
      <div>
        ChartPage
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