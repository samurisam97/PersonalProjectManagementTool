import {
  TOGGLE_UPDATE_MODE,
  UPDATE_DESCRIPTION,
  UPDATE_TITLE,
  UPDATE_IDENTIFICATION,
  CREATE_PROJECT,
  DELETE_PROJECT,
  INVALID_IDENTIFICATION,
  INVALID_TITLE,
  INVLAID_DESCRIPTION,
  VALID_IDENTIFICATION,
  VALID_TITLE,
  VLAID_DESCRIPTION
} from '../actions/properties';

export const initialState = {
  user: {
    //currently true for testing purposes
    loggedIn: true,
    userName: null
  },
  projects: []
  //   practice: [
  //     { id: '1', value: 'some stuff' },
  //     { id: '2', value: 'something else' },
  //     { id: '3', value: 'something else' },
  //     { id: '4', value: 'something else' },
  //     { id: '5', value: 'something else' }
  //   ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_UPDATE_MODE:
      if (
        state.user.loggedIn &&
        !state.projects[action.payload.index].updateMode
      ) {
        return {
          ...state,
          projects: [
            ...state.projects.slice(0, action.payload.index),
            {
              ...state.projects[action.payload.index],
              updateMode: true,
              updateText: 'Finish Updating'
            },
            ...state.projects.slice(action.payload.index + 1)
          ]
          //   practice: [
          //     ...state.practice.slice(0, action.payload.index),
          //     { id: '20', value: 'ting else' },
          //     ...state.practice.slice(action.payload.index + 1)
          //   ]
        };
      } else {
        return {
          ...state,
          projects: [
            ...state.projects.slice(0, action.payload.index),
            {
              ...state.projects[action.payload.index],
              updateMode: false,
              updateText: 'Update Project Info'
            },
            ...state.projects.slice(action.payload.index + 1)
          ]
        };
      }
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, action.payload.index),
          {
            ...state.projects[action.payload.index],
            description: action.payload.description,
            validDescription: true
          },
          ...state.projects.slice(action.payload.index + 1)
        ]
      };
    case UPDATE_IDENTIFICATION:
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, action.payload.index),
          {
            ...state.projects[action.payload.index],
            id: action.payload.identification,
            validID: true
          },
          ...state.projects.slice(action.payload.index + 1)
        ]
      };
    case UPDATE_TITLE:
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, action.payload.index),
          {
            ...state.projects[action.payload.index],
            title: action.payload.title,
            validTitle: true
          },
          ...state.projects.slice(action.payload.index + 1)
        ]
      };
    case CREATE_PROJECT:
      let size = state.projects.length;
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, size),
          {
            index: size,
            id: 'ID: 5',
            validID: false,
            title: 'Title: less than 23 long',
            validTitle: false,
            description: 'Description(optional): no longer than 130 characters',
            validDescription: true,
            updateMode: true,
            updateText: 'Finished Creating',
            deleted: false
          }
        ]
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, action.payload.index),
          {
            ...state.projects[action.payload.index],
            deleted: true
          },
          ...state.projects.slice(action.payload.index + 1)
        ]
      };
    case INVALID_IDENTIFICATION:
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, action.payload.index),
          {
            ...state.projects[action.payload.index],
            validID: false
          },
          ...state.projects.slice(action.payload.index + 1)
        ]
      };
    case INVALID_TITLE:
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, action.payload.index),
          {
            ...state.projects[action.payload.index],
            validTitle: false
          },
          ...state.projects.slice(action.payload.index + 1)
        ]
      };
    case INVLAID_DESCRIPTION:
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, action.payload.index),
          {
            ...state.projects[action.payload.index],
            validDescription: false
          },
          ...state.projects.slice(action.payload.index + 1)
        ]
      };
    case VALID_IDENTIFICATION:
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, action.payload.index),
          {
            ...state.projects[action.payload.index],
            validID: true
          },
          ...state.projects.slice(action.payload.index + 1)
        ]
      };
    case VALID_TITLE:
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, action.payload.index),
          {
            ...state.projects[action.payload.index],
            validTitle: true
          },
          ...state.projects.slice(action.payload.index + 1)
        ]
      };
    case VLAID_DESCRIPTION:
      return {
        ...state,
        projects: [
          ...state.projects.slice(0, action.payload.index),
          {
            ...state.projects[action.payload.index],
            validDescription: true
          },
          ...state.projects.slice(action.payload.index + 1)
        ]
      };
    default:
      return state;
  }
};

export default rootReducer;
