import React from 'react';
import ButtonC from './ButtonC.js';

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
        <div style={{ height: '200px', width: '200px', backgroundColor: this.state.color }}>
          <ButtonC clickHandler={this.changeColor} currentColor={this.state.color}></ButtonC>
        </div>
      </center>
    )
  }
}

export default Button;
// import React, { Component } from 'react';
// import './Button.css';

// class Button extends Component {
// constructor(props) {
//     super(props);
//     this.state = {
//       clicks: "hi",
//       show: true
//     };
//   }
//   ToggleClick = () => {
//     this.setState({ show: !this.state.show });
//   }
// render() {
//     return (
//         <div className="flex">
//         <button onClick={this.ToggleClick}>
//       { this.state.show ? 'Ilikeredcolor' : 'Ihateredcolor'}
//     </button>
//     { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
//             </div>
//         );
//     }
// }
// class Button extends React.Component {
//     constructor(props){
//       super(props)
//       this.state ={
//         button: true
//       }
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(){
//       this.setState({
//         button:!this.state.button
//       })
//     }
//     render(){
//       return (
//       <div onClick={this.handleClick} className="container">
//         <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>I like red color!</button>  
//       </div>
//       )
//     }

//   }
// export default Button;
