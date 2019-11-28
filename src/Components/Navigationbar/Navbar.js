import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <a className="header" href='/'>Task1</a>
        <a className="header" href='/userinput'>Task2</a>
        <a className="header" href='/lifecycle'>Task3</a>
        <a className="header" href='/add'>Task4</a>
        <a className="header" href='/button'>Task5</a>
        <a className="header" href='/restless'>Task6</a>


      </div>
    );
  }
}

export default Navbar;