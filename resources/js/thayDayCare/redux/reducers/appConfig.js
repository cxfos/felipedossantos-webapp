import { combineReducers } from 'redux';

import appWindow from './appWindow';
import initialState from "../initialState";

export const SET_TITLE = 'set/appConfig.title';
export const SET_DESCRIPTION = 'set/appConfig.description';

function title(state = initialState.appConfig.title, action) {
  if (action && action.type === SET_TITLE) {
    return action.value;
  } else {
    return state;
  }
}

function description(state= initialState.appConfig.description, action) {
  if (action && action.type === SET_DESCRIPTION) {
    return action.value;
  } else {
    return state;
  }
}

const appConfig = combineReducers({
  appWindow,
  title,
  description,
});

export default appConfig;
