import React from 'react';
import ProjectItem from './Project/ProjectItem';
import classes from './Dashboard.module.css';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/index';

const Dashboard = props => {
  return (
    <div className={classes.Dashboard}>
      <h1>Projects</h1>
      <button className={classes.Top} onClick={props.onCreation}>
        Create a Project
      </button>
      <ProjectItem />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onCreation: () => dispatch(createProject())
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
