import React, { Component } from 'react';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 10,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 5 });
  }
  DecreaseItem = () => {
    if (this.state.clicks > 0) {
      this.setState({ clicks: this.state.clicks - 5 })
    }
  }
  MultiplyItem = () => {
    this.setState({ clicks: this.state.clicks * 10 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>Click to increment by 10</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 10</button>
        <button onClick={this.MultiplyItem}>Click to Multily by 10</button>
        <button onClick={this.ToggleClick}>
          {this.state.show ? 'Hide number' : 'Show number'}
        </button>
        {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
      </div>
    );
  }
}

export default Demo;