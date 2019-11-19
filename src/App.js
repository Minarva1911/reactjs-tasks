import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      	<Router>
         <switch>
        <Route exact path='/' component={Signin}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        </switch>
      </Router> 
    </div>
  );
}

export default App;
