import React from 'react';
import PageTitle from './PageTitle/PageTitle';
import classes from './Header.module.css';
import Right from './Right/Right';

const Header = props => {
  return (
    <nav className={classes.Header}>
      <ul>
        <li>
          <PageTitle />
        </li>
        <li>
          <Right />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
