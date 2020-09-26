import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import '../../sass/rootSite/rootSite.scss';

import SinglePage from './containers/SinglePage';
import configureStore from "./redux/store";
import MainNav from "./components/MainNav";

const store = configureStore({title: 'no title', description: 'no description' });

function InitialApp() {
  return (
    <Provider store={store}>
        <div className='app-container'>
          <MainNav />
          <SinglePage />
        </div>
    </Provider>
  );
}

export default InitialApp;

if (document.getElementById('root_site_app')) {
    ReactDOM.render(<InitialApp />, document.getElementById('root_site_app'));
}
