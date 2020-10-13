import React, { useState } from "react";
import "../App.css";

function Form() {
  const [state, setState] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    const setValue = type === "checkbox" ? checked : value
    
       setState({
          ...state,
          [name]: setValue,
        });
  };

  return (
    <>
      <div>
        <h1>Welcome Back :)</h1>
        <span>
          To keep connected with us, please login with your personal information
          by email and password{" "}
        </span>
        <span
          class='material-icons'
          style={{ color: "gold", position: "absolute" }}
        >
          notifications
        </span>
      </div>

      <div className='form'>
        <form action=''>
          <div className='input-container'>
            <i class='material-icons input-icon'>email</i>
            <input
              className='input'
              type='email'
              name='email'
              value={state.email}
              id=''
              placeholder='Email Address'
              onChange={handleChange}
            />
          </div>

          <div className='input-container'>
            <span class='material-icons input-icon'>lock</span>
            <input
              className='input'
              type='password'
              name='password'
              value={state.password}
              id=''
              placeholder='Password'
              onChange={handleChange}
            />
          </div>

          <div className='row'>
            <div className='col-sm-4 underthis'>
              <input
                type='checkbox'
                name='rememberMe'
                checked={state.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </div>
            <div className='col-sm-4 under'>
              <a>forgot password?</a>{" "}
            </div>
          </div>

          <button className='btn btn-primary'>Login</button>
          <button
            href=''
            style={{ position: "relative", float: "right", right: "160px" }}
            className='btn btn-secondary'
          >
            Create Account
          </button>
        </form>
      </div>

      <div className='smlinks'>
        <p>or you can join with</p>
        <button  id='thisthat' class='material-icons'>
          facebook
        </button>
        <a href='#' className='thisthose'>
          <img src='https://img.icons8.com/color/23/000000/google-logo.png' />
        </a>
        <span className='thisthen'>
          <a href='#' class='fab fa-twitter'></a>
        </span>
      </div>
    </>
  );
}

export default Form;
