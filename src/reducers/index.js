import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import mainReducer from './main';

const rootReducer = combineReducers({
  data: mainReducer,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
