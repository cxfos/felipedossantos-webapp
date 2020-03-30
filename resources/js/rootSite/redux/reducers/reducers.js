import { combineReducers } from 'redux';

const reducers = combineReducers({
  title: (state, action) => action ? 'Felipe dod Santos' : state,
  description: (state, action) => action ? 'Welcome to Felipe\'s portifolio' : state,
});

export default reducers;
