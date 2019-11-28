import React from 'react';
import ButtonC from './ButtonC.js';
import Navbar from '../Navigationbar/Navbar.js';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: 'red'
    };
  }
  changeColor() {
    this.setState((prevState, props) => ({
      color: prevState.color === 'red' ? 'purple' : 'red'
    }));
  }
  render() {
    return (
      <center>
        <Navbar/>
        <div style={{ height: '200px', width: '200px', backgroundColor: this.state.color }}>
          <ButtonC clickHandler={this.changeColor} currentColor={this.state.color}></ButtonC>
        </div>
      </center>
    )
  }
}

export default Button;

