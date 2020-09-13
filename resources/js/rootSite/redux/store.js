import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/reducers';
import rootSaga from './sagas/sagas';


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [thunkMiddleware, sagaMiddleware];
  const compose = composeWithDevTools({});
  const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware)));
  sagaMiddleware.run(rootSaga);

  return store;
}
