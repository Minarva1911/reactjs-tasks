import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import Lifecycle from './Components/Lifecycle/Lifecycle';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Add from './Components/Add/Add';
import Button from './Components/Button/Button';
import Userinput from './Components/Userinput/Userinput';
import Restless from './Components/Restless/Restless';
import Demo from './Components/Demo/Demo';


function App() {
  return (
    <div className="App">
      <Router>
        <switch>
          <Route exact path='/' component={Signin}></Route>
          <Route exact path='/button' component={Button}></Route>
          <Route exact path='/lifecycle' component={Lifecycle}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/add' component={Add}></Route>
          <Route exact path='/demo' component={Demo}></Route>
          <Route exact path='/userinput' component={Userinput}></Route>
          <Route exact path='/restless' component={Restless}></Route>

        </switch>
      </Router>
    </div>
  );
}

export default App;

