import React, { Component } from 'react';
import {connect} from 'react-redux'

import {logInUser} from './../ducks/reducer';

class AboutPage extends Component {
  render() {
    return (
      <div>
        AboutPage
        <br/>
        <button onClick={this.props.logInUser}>
          click me
        </button>
      </div>
    );
  }
}

export default connect(null, {logInUser})(AboutPage);