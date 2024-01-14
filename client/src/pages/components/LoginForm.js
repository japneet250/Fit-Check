import React, { useState } from 'react';


const YourComponent = ({data, sendData}) => {

  return (
    <div>
      <div className="container">
      </div>
      <div className="form-box">
        <h1 id="title">Sign In</h1>
          <div className="input-group">
            <div className="input-field" id="nameField">
              <input type="text" id="nameInput" placeholder="Name" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div id="message"></div>
            <p>
              Lost Password <a href="#">Click Here!</a>
            </p>
          </div>
          <div className="btn-field">
            <button type="button" id="signupbtn">
              Sign up
            </button>
            <button type="button" id="signinbtn">
              Sign in
            </button>
          </div>
      </div>
    </div>
  );
};

async function sendData () {
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

}
export default YourComponent;