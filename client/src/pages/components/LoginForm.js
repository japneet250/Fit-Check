import React, { useEffect, useState } from 'react';
import daisyui from 'daisyui';

const YourComponent = ({info, sendInfo}) => {
  const [login, setLogin] = useState(true);
// State for the user's input and whether they are currently logged in or not
  useEffect(() => {
    const signupbtn = document.getElementById("signupbtn");
    const signinbtn = document.getElementById("signinbtn");
    const nameField = document.getElementById("nameField");
    const title = document.getElementById("title");
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupbtn.classList.add("disabled");
    signinbtn.classList.remove("disabled");
  });

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
            <button type="button" id="signupbtn" onClick={() => signUp(setLogin)}>
              Sign up
            </button>
            <button type="button" id="signinbtn" onClick={() => signIn(setLogin)}>
              Sign in
            </button>
            <button type='button' className='w-full' onClick={() => sendData(login, setLogin)}>Submit</button>
          </div>
      </div>
      
    </div>
  );
};

async function sendData (login, setLogin) {

  let name = "";
  name = document.getElementById("nameInput").value;
  

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const formData = new FormData()

  
  formData.append('name', name);
  

  /*
  {
    "name": "John Doe",
    "email": "john@doe.com",

  }
  */

  formData.append('email', email);
  formData.append('password', password)
  
  const path = "http://localhost:5000/signup"

  try {
    console.log(path)
    const response = await fetch("http://localhost:5000/signup", {
        method: 'POST',
        body: formData,
    });
    const responseData = await response.json();
    console.log(responseData)
    setLogin(true)
    document.getElementById("my_modal_5")
  } catch (error) {
      console.log(error);
  }
}

function signUp (setLogin) {
  const signupbtn = document.getElementById("signupbtn");
  const signinbtn = document.getElementById("signinbtn");
  const nameField = document.getElementById("nameField");
  const title = document.getElementById("title");
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupbtn.classList.remove("disabled");
  signinbtn.classList.add("disabled");
  setLogin(false)
};

async function signIn(setLogin) {
  const signupbtn = document.getElementById("signupbtn");
  const signinbtn = document.getElementById("signinbtn");
  const nameField = document.getElementById("nameField");
  const title = document.getElementById("title");
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupbtn.classList.add("disabled");
  signinbtn.classList.remove("disabled");
  setLogin(true)
};


export default YourComponent;