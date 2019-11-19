import React, { Component } from 'react';
import { breakStatement } from '@babel/types';
import './Signin.css';

class Signin extends Component {
    render() {
        return (
            <div className="demo1">
                Signin Form
            <div>
                <img src="./Componments/Images/Image1.jpg" alt="valid"/>
            <form>
                <input type="text" placeholder="Mobile/Email" minlength="10" size="30" required/>
                <br/><br/>
                <input type="text" placeholder="Password" minlength="10" size="30" required/>
                <br/><br/>
                <input type="checkbox" required/>Remember me Forgot Password?
                <br/><br/>
                <button >Signin</button>
            </form>
            <br/>
            <div>
                Create a new account
                <div>
               <a href="/signup">signup</a>
               </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Signin;