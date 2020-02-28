import React, { Component } from 'react';
import PageTitle from '../Left/PageTitle';
import classes from './Header.module.css';
import Right from '../Right/Right';

class Header extends Component {
  render() {
    return (
      <ul className={classes.Header}>
        <nav>
          <ul>
            <PageTitle />
          </ul>
          <ul>
            <Right className={classes.HeaderRight} />
          </ul>
        </nav>
      </ul>
    );
  }
}

export default Header;
