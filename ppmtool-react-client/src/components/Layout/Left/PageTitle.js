import React, { Component } from 'react';
import classes from './Left.module.css';

class PageTitle extends Component {
  render() {
    return (
      <li className={classes.Left}>
        <a href="Dashboard.html">Personal Project Management Tool</a>
      </li>
    );
  }
}

export default PageTitle;
