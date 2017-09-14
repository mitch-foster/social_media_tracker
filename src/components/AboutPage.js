import React, { Component } from 'react';
import {connect} from 'react-redux'

import {logInUser} from './../ducks/reducer';

class AboutPage extends Component {
  render() {
    return (
      <div>
        AboutPage
        <br/>
        <a href='http://localhost:3333/auth/twitter'>
          <button>
            Enter
          </button>
        </a>
      </div>
    );
  }
}

export default connect(null, {logInUser})(AboutPage);