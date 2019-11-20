import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    render() {
        return (
          <center>
            <div className="demo">
               <div className="head">Signup Form</div> 
                <form> <br />
                    <input className="mobile" type="text" placeholder="FirstName" minlength="10" size="40" required />
                    <br /><br />
                    <input className="mobile" type="text" placeholder="LastName" minlength="10" size="40" required />
                    <br /><br />
                    <input className="mobile" type="text" placeholder="minarvamohan@gmail.com" minlength="10" size="40" required />
                    <br /><br />
                    <input className="mobile" type="text" placeholder="Plz enter phone number" minlength="10" size="40" required />
                    <br /><br />
                    <input className="mobile" type="text" placeholder="Password" minlength="10" size="40" required />
                    <br /><br />
                    <input className="mobile" type="text" placeholder="Conform password" minlength="10" size="40" required />
                    <br /><br />
                    <input className="para1" type="checkbox" required /><label className="para">I agree to terms & privacy policices</label>
                <br /><br />
                <div><button className="button">Signup</button></div>
                </form>
            </div>
            </center>

        );
    }
}

export default Signup;