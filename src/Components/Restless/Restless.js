import React, { Component } from 'react';
import Restlessa from './Restlessa';
import Navbar from '../Navigationbar/Navbar';

class Restless extends Component {
  render() {
    return (
      <div> <Navbar />
        <Restlessa list={this.state.list} />
      </div>
    )
  }
  state = {
    list: ' '
  }
  componentDidMount() {
    fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ list: data })
      })
      .catch(console.log)
  }
}

export default Restless;