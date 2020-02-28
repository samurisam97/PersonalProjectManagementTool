import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import DashLink from './DashLink';
import classes from './Right.module.css';

class Right extends Component {
  render() {
    return (
      <ul className={classes.Right}>
        <ul>
          <li>
            <Login />
          </li>
          <li>
            <SignUp />
          </li>
          <li>
            <DashLink />
          </li>
        </ul>
      </ul>
    );
  }
}

export default Right;
