import React from 'react';
import classes from './Right.module.css';

const Right = props => {
  let state = {
    logedIn: false,
    logBtnDropClass: null,
    signBtnDropClass: null
  };

  const loginHandler = () => {
    this.setState({ logedIn: !state.loggedIn });
  };

  const loginDropdownHandler = () => {
    if (state.logBtnDropClass == null) {
      state.logBtnDropClass = classes.dropdown;
    } else {
      state.logBtnDropClass = null;
    }
  };

  const signupDropdownHandler = () => {
    if (state.signBtnDropClass == null) {
      state.signBtnDropClass = classes.dropdown;
    } else {
      state.signBtnDropClass = null;
    }
  };

  let signUp = null;
  let login = null;
  let dashlink = null;

  if (!state.logedIn) {
    signUp = (
      <li>
        <button
          className={state.signBtnDropClass}
          onClick={signupDropdownHandler}
        >
          Sign Up
        </button>
      </li>
    );
    login = (
      <li>
        <button
          className={state.logBtnDropClass}
          onClick={loginDropdownHandler}
        >
          Login
        </button>
      </li>
    );
  } else {
    dashlink = (
      <li>
        <button onClick={loginHandler}>Dashboard</button>
      </li>
    );
  }

  return (
    <div className={classes.Right}>
      <ul>
        {dashlink}
        {signUp}
        {login}
      </ul>
    </div>
  );
};

export default Right;
