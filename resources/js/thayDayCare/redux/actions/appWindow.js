import { SET_HEIGHT, SET_WIDTH } from "../reducers/appWindow";

export function setHeight(value) {
  return {
    type: SET_HEIGHT,
    value
  }
}

export function setWidth(value) {
  return {
    type: SET_WIDTH,
    value
  }
}
