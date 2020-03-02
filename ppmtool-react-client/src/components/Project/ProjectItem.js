import React, { Component } from 'react';
import classes from './ProjectItem.module.css';

class ProjectItem extends Component {
  render() {
    return (
      <div className={classes.ProjectItem}>
        <div>
          <div>
            <div>
              <span>REACT</span>
            </div>
            <div>
              <h3>Spring / React Project</h3>
              <p>Project to create a Kanban Board with Spring Boot and React</p>
            </div>
            <div>
              <ul>
                <a href="#">
                  <li>
                    <i>Project Board </i>
                  </li>
                </a>
                <a href="#">
                  <li>
                    <i>Update Project Info</i>
                  </li>
                </a>
                <a href="">
                  <li>
                    <i>Delete Project</i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
