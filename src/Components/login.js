import image from "../images/login-bg.png"
import React from 'react';
import './login.css';

const Login = () => {
  const handleSignUpClick = () => {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  };

  const handleSignInClick = () => {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  };

  return (
    <div className="login-card" >
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <input type="email" required placeholder="Email" />
          <input type="password" required placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1></h1>
            <p></p>
            <button className="ghost" onClick={handleSignInClick}>
              
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Don't have an account</h1>
            
            <button className="ghost" onClick={handleSignUpClick}>
             REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
