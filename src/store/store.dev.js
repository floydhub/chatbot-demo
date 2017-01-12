import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from 'reducers/';
import { apiMiddleware } from 'redux-api-middleware';
import DevTools from 'containers/DevTools';

export default function configureStore(history, preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, apiMiddleware, routerMiddleware(history)),
      DevTools.instrument()
    )
  );

  return store;
}
