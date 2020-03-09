import React from 'react';
import classes from './ProjectInstance.module.css';
import { connect } from 'react-redux';
import {
  toggleUpdateMode,
  updateDescription,
  updateIdentification,
  updateTitle,
  deleteProject,
  validateIdentification,
  validateTitle,
  validateDescription
} from '../../../../redux/actions/index';

const ProjectInstance = props => {
  let newDescription = '';
  let newIdentification = '';
  let newTitle = '';

  const updateTogglerHandler = () => {
    if (props.updateMode) {
      if (
        props.description ===
          'Description(optional): no longer than 130 characters' &&
        newDescription > 130
      ) {
        return;
      } else if (newDescription !== '') {
        props.onUpdateDescription(props.index, newDescription);
      }
      if (props.identification === 'ID: 5' && newIdentification !== 5) {
        return;
      } else if (newIdentification !== '') {
        props.onUpdateIdentification(props.index, newIdentification);
      }
      if (
        (props.projectTitle === 'Title: less than 23 long' &&
          newTitle === '') ||
        newTitle > 23
      ) {
        return;
      } else if (newTitle !== '') {
        props.onUpdateTitle(props.index, newTitle, props.projectTitle);
      }
    }
    props.onUpdateToggle(props.index);
  };

  const descriptionUpdated = event => {
    newDescription = event.target.value;
    props.onDescriptionValidation(props.index, newDescription);
  };

  const identificationUpdated = event => {
    newIdentification = event.target.value.toUpperCase();
    props.onIdValidation(props.index, newIdentification);
  };

  const titleUpdated = event => {
    newTitle = event.target.value;
    props.onTitleVlaidation(props.index, newTitle, props.projectTitle);
  };

  const displayedDescription = () => {
    let descriptionClass = null;

    if (props.updateMode) {
      if (props.validDescription) {
        descriptionClass = null;
      } else {
        console.log('here');
        descriptionClass = classes.incorrect;
      }
      return (
        <textarea
          className={descriptionClass}
          type="text"
          placeholder={props.description}
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
      if (props.validID) {
        identificationClass = classes.identification;
      } else {
        identificationClass = classes.incorrectID;
      }
      return (
        <input
          className={identificationClass}
          type="text"
          placeholder={props.identification}
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
      if (props.validTitle) {
        titleClass = classes.title;
      } else {
        titleClass = classes.incorrectTitle;
      }
      return (
        <input
          className={titleClass}
          type="text"
          placeholder={props.projectTitle}
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
    props.onDelete(props.index);
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
    onUpdateTitle: (index, newTitle, oldTitle) =>
      dispatch(updateTitle(index, newTitle, oldTitle)),
    onDelete: index => dispatch(deleteProject(index)),
    onIdValidation: (index, identification) =>
      dispatch(validateIdentification(index, identification)),
    onTitleVlaidation: (index, title, oldTitle) =>
      dispatch(validateTitle(index, title, oldTitle)),
    onDescriptionValidation: (index, description) =>
      dispatch(validateDescription(index, description))
  };
};

export default connect(null, mapDispatchToProps)(ProjectInstance);
