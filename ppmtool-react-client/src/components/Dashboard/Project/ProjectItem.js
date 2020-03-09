import React from 'react';
import { connect } from 'react-redux';
import classes from './ProjectItem.module.css';
import ProjectInstance from './ProjectInstance/ProjectInsance';

const ProjectItem = props => {
  return (
    <div>
      {props.projectsList.map((value, index) => {
        if (!value.deleted) {
          return (
            <div>
              <div className={classes.ProjectItem}>
                <ProjectInstance
                  key={value.index}
                  index={value.index}
                  identification={value.id}
                  validID={value.validID}
                  projectTitle={value.title}
                  validTitle={value.validTitle}
                  description={value.description}
                  validDescription={value.validDescription}
                  updateMode={value.updateMode}
                  updateText={value.updateText}
                />
              </div>
            </div>
          );
        } else {
          return <div className={classes.ProjectItem.deleted}></div>;
        }
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projectsList: state.projects
  };
};

export default connect(mapStateToProps)(ProjectItem);
