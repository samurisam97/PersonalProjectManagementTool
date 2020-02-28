import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import DashLink from './DashLink';
import classes from './Right.module.css';

class Right extends Component {
  render() {
    return (
      <div className={classes.Right}>
        <ul>
          <li>
            <DashLink />
          </li>
        </ul>

        <ul>
          <li>
            <SignUp />
          </li>
          <li>
            <Login />
          </li>
        </ul>
      </div>
    );
  }
}

export default Right;
