import React from 'react';
import classes from './LoginForm.module.css';

const LoginForm = props => {
  return (
    <div className={classes.LoginForm}>
      <input type="text" value="Username" />
      <br />
      <input type="text" value="Password" />
      <br />
      <button>Login</button>
    </div>
  );
};

export default LoginForm;
