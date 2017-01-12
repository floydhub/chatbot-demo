import _ from 'lodash';

import * as at from 'actions/actionTypes';
import { prefix } from 'actions/main';

const getRequest = at.combine(prefix, at.GET_REQUEST);
const getSuccess = at.combine(prefix, at.GET_SUCCESS);
const getFailure = at.combine(prefix, at.GET_FAILURE);

function mainStoreReducer(state = {}, action) {
  switch (action.type) {
    case getRequest:
      return _.merge({}, state, {
        isFetching: true,
      });
    case getSuccess:
      return _.assign({}, state, {
        isFetching: false,
        // modulesSR: _.map(action.payload, (module)=>module.id),// store ids array of search results
        // // create object from array, then merge with existing
        // modules: _.merge(state.modules, _.keyBy(action.payload, 'id')), 
        lastUpdated: Date.now(),
      });
    case getFailure:
      return _.merge({}, state, {
        isFetching: false,
      });
    default:
      return state;
  }
}

export default mainStoreReducer;
