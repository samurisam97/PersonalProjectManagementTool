import React from 'react';
import classes from './ProjectInstance.module.css';
import { connect } from 'react-redux';
import {
  toggleUpdateMode,
  updateDescription,
  updateIdentification,
  updateTitle,
  deleteProject
} from '../../../../redux/actions/index';

const ProjectInstance = props => {
  const index = props.index;
  let newDescription = props.description;
  let newIdentification = props.identification;
  let newTitle = props.projectTitle;

  const descriptPlaceholder =
    'Description(optional): no longer than 130 characters';
  const idPlaceholder = 'ID: 5';
  const titlePlaceholder = 'Title: 1-22 characters';

  const validDescription = props.validDescription;
  const validID = props.validID;
  const validTitle = props.validTitle;

  const updateMode = props.updateMode;

  const updateTogglerHandler = () => {
    if (updateMode) {
      if (!validDescription) {
        return;
      }
      if (!validID) {
        return;
      }
      if (!validTitle) {
        return;
      }
    }
    props.onUpdateToggle(index);
  };

  const descriptionUpdated = event => {
    newDescription = event.target.value;
    props.onUpdateDescription(index, newDescription);
  };

  const identificationUpdated = event => {
    newIdentification = event.target.value.toUpperCase();
    props.onUpdateIdentification(index, newIdentification);
  };

  const titleUpdated = event => {
    newTitle = event.target.value;
    props.onUpdateTitle(index, newTitle);
  };

  const displayedDescription = () => {
    let descriptionClass = null;

    if (updateMode) {
      if (validDescription) {
        descriptionClass = null;
      } else {
        descriptionClass = classes.incorrect;
      }
      return (
        // have default value be description variable not just new description
        //    this should allow you to never have to check the "old" of anything
        //    the description will just always be checked against the requirements and only
        //    what is in the store
        <textarea
          className={descriptionClass}
          type="text"
          placeholder={descriptPlaceholder}
          name="description"
          defaultValue={newDescription}
          onChange={descriptionUpdated}
        ></textarea>
      );
    } else {
      return <p>{props.description}</p>;
    }
  };

  const displayedID = () => {
    let identificationClass = classes.identification;
    if (props.updateMode) {
      identificationClass = classes.incorrectID;
      if (validID) {
        identificationClass = classes.identification;
      } else {
        identificationClass = classes.incorrectID;
      }
      return (
        <input
          className={identificationClass}
          type="text"
          placeholder={idPlaceholder}
          name="identity"
          defaultValue={newIdentification}
          onChange={identificationUpdated}
        ></input>
      );
    } else {
      return <h1>{props.identification}</h1>;
    }
  };

  const displayedTitle = () => {
    let titleClass = classes.title;
    if (props.updateMode) {
      titleClass = classes.incorrectTitle;
      if (validTitle) {
        titleClass = classes.title;
      } else {
        titleClass = classes.incorrectTitle;
      }
      return (
        <input
          className={titleClass}
          type="text"
          placeholder={titlePlaceholder}
          name="projTitle"
          defaultValue={newTitle}
          onChange={titleUpdated}
        ></input>
      );
    } else {
      return <p>{props.projectTitle}</p>;
    }
  };

  const deleteHandler = () => {
    props.onDelete(index);
  };

  return (
    <div>
      <div>
        <div className={classes.IdAndTitle}>
          <ul>
            <li>{displayedID()}</li>
            <li>{displayedTitle()}</li>
          </ul>
        </div>
      </div>
      <div>
        <div className={classes.ProjectButtons}>
          <button>Project Board </button>
          <button onClick={updateTogglerHandler}>{props.updateText}</button>
          <button className={classes.Delete} onClick={deleteHandler}>
            Delete Project
          </button>
        </div>
      </div>
      <div>
        <div className={classes.Description}>{displayedDescription()}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateToggle: index => dispatch(toggleUpdateMode(index)),
    onUpdateDescription: (index, newDescription) =>
      dispatch(updateDescription(index, newDescription)),
    onUpdateIdentification: (index, newIdentification) =>
      dispatch(updateIdentification(index, newIdentification)),
    onUpdateTitle: (index, newTitle) => dispatch(updateTitle(index, newTitle)),
    onDelete: index => dispatch(deleteProject(index))
  };
};

export default connect(null, mapDispatchToProps)(ProjectInstance);
