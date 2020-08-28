import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import configureStore from "./redux/store";

const store = configureStore({title: 'no title', description: 'no description' });

function InitialApp() {
  return (
    <Provider store={store}>
        <div className='app-container'>
          <h1>Hi. This is Thay Day Care Page</h1>
        </div>
    </Provider>
  );
}

export default InitialApp;

if (document.getElementById('thay_daycare_app')) {
    ReactDOM.render(<InitialApp />, document.getElementById('thay_daycare_app'));
}
