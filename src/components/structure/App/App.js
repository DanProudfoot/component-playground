import React, { Component } from 'react';
import logo from 'assets/images/logo.svg';
import style from './app.module.css';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={style.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
