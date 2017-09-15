import React, { Component } from 'react';


class AboutPage extends Component {
  render() {
    return (
      <div>
        <h3>
         
        </h3>
        <h3>
          Welcome! Log in to see a visual representaion of your Twitter stats.
        </h3>
        <br/>
        <a href='http://localhost:3333/auth/twitter'>
          <button className='button'>
            Enter
          </button>
        </a>
      </div>
    );
  }
}

export default AboutPage;