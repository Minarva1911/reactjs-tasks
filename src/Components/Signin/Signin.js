import React, { Component } from 'react';
import { breakStatement } from '@babel/types';
import './Signin.css';
import images from "../Image1.jpg";
import { SocialIcon } from 'react-social-icons';

class Signin extends Component {
  render() {
    return (
      <center>
        <div className="demo1">
          <div className="head">Signin Form</div>
            <img src={images}/><br/><br/>
              <form>
                <input className="mobile" type="text" placeholder="Mobile/Email" minlength="10" size="40" required/><br/><br/>
                <input className="mobile" type="text" placeholder="Password" minlength="10" size="40" required/><br/><br/>
                <input className="box1" type="checkbox" required/><label className="para">Remember me</label>
                <div className="box2">Forgot Password?</div><br/>
                <div><button className="button">Signin</button></div>
              </form><br/>
                <div>Create a new account<div><br/>
                <div>(or)</div><br/>
                <div>
                  <SocialIcon url="http://twitter.com/jaketrent" />
                  <SocialIcon url="http://facebook.com/jaketrent" />
                  <SocialIcon url="http://google.com/jaketrent" />
                </div>
                <a href="/signup">signup</a>
            </div>
          </div>
        </div>
      </center>
    );
  }
}

export default Signin;