import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
  render() {
    return (
      <div>
        <Line
          data={this.props.data}
          options={{
            maintainAspectRatio: true,
            title: {
              display: true,
              text: 'Twitter Followers by Month',
              fontSize: 25,
            }
            
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    data: state.chartData
  }
}

export default connect(mapStateToProps)(Chart);
