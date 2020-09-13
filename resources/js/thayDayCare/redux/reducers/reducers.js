import { combineReducers } from 'redux';

const reducers = combineReducers({
  title: (state, action) => action ? 'Thay Day Care' : state,
  description: (state, action) => action ? 'Welcome to Thais\' Day Care' : state,
});

export default reducers;
