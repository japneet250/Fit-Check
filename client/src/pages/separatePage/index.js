import React, { useState } from 'react';
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, update} from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA7wV_ido1Km0gO3m1eAQ89hs-hem2kbZg",
  authDomain: "login-auth-1d209.firebaseapp.com",
  databaseURL: "https://login-auth-1d209-default-rtdb.firebaseio.com",
  projectId: "login-auth-1d209",
  storageBucket: "login-auth-1d209.appspot.com",
  messagingSenderId: "467474613716",
  appId: "1:467474613716:web:2c1ccdf47896ee9a66c241"
};

export default function Login () {
  const [nameFieldHeight, setNameFieldHeight] = useState(0);

  const handleSignup = () => {
    setNameFieldHeight(60);

    // Firebase initialization and signup logic
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('nameInput').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid), {
          username: name,
          email: email
        }).then(() => {
          alert('User created successfully!');
        }).catch((error) => {
          alert('Error updating database: ' + error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const handleSignin = () => {
    setNameFieldHeight(0);

    // Firebase initialization and signin logic
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const dt = new Date();

        update(ref(database, 'users/' + user.uid), {
          last_login: dt,
        });

        alert('User logged in');
        document.getElementById('nameInput').style.display = 'none'; // Hide name field
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
    <div class="container">
    </div>
    <div class="form-box">
        <h1 id="title">Sign In</h1>
        <form>
            <div class="input-group">
                <div class="input-field" id="nameField">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" id="nameInput" placeholder="Name" />
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" id="password" placeholder="Password" />
                </div>
                <div id="message"></div>
                <p>Lost Password <a href="#">Click Here!</a></p>
            </div>
            <div class="btn-field">
                <button type="button" id="signupbtn">Sign up</button>
                <button type="button" id="signinbtn">Sign in</button>
            </div>
        </form>
    </div>
    </>
  );
};
