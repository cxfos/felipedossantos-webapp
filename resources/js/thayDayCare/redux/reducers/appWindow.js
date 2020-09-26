import { combineReducers } from 'redux';
import initialState from "../initialState";

export const SET_HEIGHT = 'set/appConfig.appWindow.height';
export const SET_WIDTH = 'set/appConfig.appWindow.width';

function height(state = initialState.appConfig.appWindow.height, action) {
  if (action && action.type === SET_HEIGHT) {
    return action.value;
  } else {
    return state;
  }
}

function width(state = initialState.appConfig.appWindow.width, action) {
  if (action && action.type === SET_WIDTH) {
    return action.value;
  } else {
    return state;
  }
}


const appWindow = combineReducers({
  height,
  width,
});

export default appWindow;
