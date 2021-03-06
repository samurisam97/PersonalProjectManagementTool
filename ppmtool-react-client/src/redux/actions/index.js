import {
  TOGGLE_UPDATE_MODE,
  UPDATE_DESCRIPTION,
  UPDATE_IDENTIFICATION,
  UPDATE_TITLE,
  CREATE_PROJECT,
  DELETE_PROJECT,
  INVALID_IDENTIFICATION,
  INVALID_TITLE,
  INVLAID_DESCRIPTION
} from './properties';

export const toggleUpdateMode = index => {
  return {
    type: TOGGLE_UPDATE_MODE,
    payload: {
      index
    }
  };
};

export const updateDescription = (index, description) => {
  if (description.length > 130) {
    return {
      type: INVLAID_DESCRIPTION,
      payload: {
        index
      }
    };
  } else {
    return {
      type: UPDATE_DESCRIPTION,
      payload: {
        index,
        description
      }
    };
  }
};

export const updateIdentification = (index, identification) => {
  if (identification.length !== 5) {
    return {
      type: INVALID_IDENTIFICATION,
      payload: {
        index
      }
    };
  } else {
    return {
      type: UPDATE_IDENTIFICATION,
      payload: {
        index,
        identification
      }
    };
  }
};

export const updateTitle = (index, title, oldTitle) => {
  if (title.length > 22 || title === '') {
    return {
      type: INVALID_TITLE,
      payload: {
        index
      }
    };
  } else {
    return {
      type: UPDATE_TITLE,
      payload: {
        index,
        title
      }
    };
  }
};

export const createProject = () => {
  return {
    type: CREATE_PROJECT
  };
};

export const deleteProject = index => {
  return {
    type: DELETE_PROJECT,
    payload: {
      index
    }
  };
};
