import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    render() {
        return (
            <div className="demo">
                Signup Form
                <form> <br/>
                <input type="text" placeholder="FirstName" minlength="10" size="30" required/>
                <br/><br/>
                <input type="text" placeholder="LastName" minlength="10" size="30" required/>
                <br/><br/>
                <input type="text" placeholder="minarvamohan@gmail.com" minlength="10" size="30" required/>
                <br/><br/>
                <input type="text" placeholder="Plz enter phone number" minlength="10" size="30" required/>
                <br/><br/>
                <input type="text" placeholder="Password" minlength="10" size="30" required/>
                <br/><br/>
                <input type="text" placeholder="Conform password" minlength="10" size="30" required/>
                <br/><br/>
                <input type="checkbox" required/>I agree to terms & privacy policices 
                <br/><br/>
                <button >Signup</button>
            </form>
            </div>
        
        );
    }
}

export default Signup;