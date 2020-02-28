import React, { Component } from 'react';
import PageTitle from '../Left/PageTitle';
import classes from './Header.module.css';
import Right from '../Right/Right';

class Header extends Component {
  render() {
    return (
      <nav className={classes.Header}>
        <div>
          <ul>
            <PageTitle />

            <Right />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
