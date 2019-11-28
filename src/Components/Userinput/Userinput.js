import React, { Component } from 'react';
import Navbar from '../Navigationbar/Navbar';
import Useroutput from '../Useroutput/Useroutput';

class Userinput extends Component {
  state = {
    person: [{
      name: "Minarva", age: "22",
    }]
  }
  buttonClickHandler = () => {
    console.log('clicked');
    this.setState({
      person: [{ name: "Mohan", age: "25" }]
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <input type="text" placeholder="Username" minlength="10" size="40" required /><br />
        <input type="text" placeholder="password" minlength="10" size="40" required /> <br />
        <Useroutput name='Qwinix Technology' />
        <Useroutput name='Qwinix Technology' />
        <button onClick={this.buttonClickHandler}>click here</button>
        <p>I am {this.state.person[0].name} my age is{this.state.person[0].age}</p>
      </div>
    );
  }
}

export default Userinput;