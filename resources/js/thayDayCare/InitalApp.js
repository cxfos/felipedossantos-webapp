import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';

import '../../sass/thayDayCare/thayDayCare.scss';

import initialState from "./redux/initialState";
import configureStore from "./redux/store";

import Main from "./containers/Main";

const store = configureStore({...initialState});

function InitialApp() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Main />
    </Provider>
  );
}

export default InitialApp;

if (document.getElementById('thay_daycare_app')) {
    ReactDOM.render(<InitialApp />, document.getElementById('thay_daycare_app'));
}
