import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Signup from './Components/Signup/Signup';
// import Signin from './Components/Signin/Signin';
// import Lifecycle from './Components/Lifecycle/Lifecycle';
// import Lifecycle from './Components/Add/Add';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Add from './Components/Add/Add';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Demo from './Components/Demo/Demo';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="App">
      	<Router>
         <switch>
         <Route exact path='/' component={Button}></Route>
        {/* <Route exact path='/' component={Signin}></Route> */}
        {/* <Route exact path='/signup' component={Signup}></Route> */}
        </switch>
      </Router> 
    </div>
  );
}

export default App;
