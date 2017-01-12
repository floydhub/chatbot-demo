import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './store/store';
import DevTools from './containers/DevTools';

import 'static/styles/bootstrap-paper/bootstrap_paper.css';
import './index.css';

const initialState = {
  
};

export const store = configureStore(browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div style={{height:'100%'}}>
      <Router history={history} routes={routes} />
      {process.env.NODE_ENV !== 'production' &&
        <DevTools />
      }      
    </div>
  </Provider>,
  document.getElementById('app')
);
