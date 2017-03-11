import React, { Component } from 'react';
import logo from './u4bi.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
          <h2>U4BI 리엑트</h2>
        </div>
        <p className="Main-intro">
          리엑트 디폴트 페이지 <code>src/App.js</code>입니다.
        </p>
      </div>
    );
  }
}

export default App;
