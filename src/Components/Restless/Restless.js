import React, { Component } from 'react';
import Restlessa from './Restlessa';
import Navbar from '../Navigationbar/Navbar';

class Restless extends Component {
  render() {
    return (
      <div> <Navbar />
        <Restlessa list1={this.state.list1} list={this.state.list} />
      </div>
    )
  }
  state = {
    list: ' ',
    list1: []
  }
  componentDidMount() {
    fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ list: data })
      })
      .catch(console.log)
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((hello) => {
        this.setState({ list1: hello })
        // console.log(this.state.list1);
      })
      .catch(console.log)
  }
}

export default Restless;