import _ from 'lodash';

import * as at from './actionTypes';
import { CALL_API, getJSON } from 'redux-api-middleware';

import { API_ROOT } from 'settings';
import { getUrlParams } from 'utils/helpers';
import { httpresponses } from 'utils/constants';

// Abstracting out the common methods between the different action modules 

// Fetches data from server using the REST API
// Can add an (optional) meta object to the each of the dispatched actions
export function get(prefix, endpoint, params, meta={}, responseType=httpresponses.JSON) {
  const urlParams = getUrlParams(params);

  return {
    [CALL_API]: {
      types: [
        {
          type: at.combine(prefix, at.GET_REQUEST),
          meta: meta, 
        },
        {
          type: at.combine(prefix, at.GET_SUCCESS),
          meta: meta,
          // NOTE: This is a source of slight inconsistency. All other responses (GET failure,
          // POST success/failure, etc.) have the response at action.payload.response. Since
          // we are overriding the payload for GET success, the response for just this action type
          // is at action.payload. Hence, all reducers and middlewares (e.g. notifications) need
          // to look for the response object in action.payload (and not in action.payload.response)
          // for this action type alone.
          payload: (action, state, res) => {
            switch(responseType) {
              case httpresponses.JSON:
                return getJSON(res);
              case httpresponses.TEXT:
                return res.text();
              default: // default try to get JSON response
                return getJSON(res);
            }
          }
        },
        {
          type: at.combine(prefix, at.GET_FAILURE),
          meta: meta,
          // payload: (action, state, res) => {
          //   console.log('Inside get failure payload. res: ', res);
          //   if (res) {
          //     return {
          //       status: res.status,
          //       statusText: res.statusText,
          //     };
          //   } else {
          //     return {
          //       status: 'Network request failed',
          //     };
          //   }
          // }
        }
      ],
      endpoint: `${API_ROOT}${endpoint}${urlParams}`,
      method: 'GET',
      // schema: {},
    }
  };
}

// Fetch an object given a particular Id
// export function fetch(meta, prefix, endpoint, params) {
export function fetch(meta, prefix, endpoint, params, dispatch) {
  return dispatch(get(prefix, endpoint, params, meta));
  // return dispatch => dispatch(get(prefix, endpoint, params, meta));
}

// Search the given endpoint using searchTerm as URL param
// Used for search results for Modules, Containers and Experiments
export function search(searchTerm, prefix, endpoint, dispatch, params={}) {
  return dispatch(get(prefix, endpoint, params));
}

// POSTs data to the server using the REST API
function post(data, prefix, endpoint, headers, params) {
  const urlParams = getUrlParams(params);

  return {
    [CALL_API]: {
      types: at.combine(prefix, [at.POST_REQUEST, at.POST_SUCCESS, at.POST_FAILURE]),
      endpoint: `${API_ROOT}${endpoint}${urlParams}`,
      method: 'POST',
      headers: headers,
      body: data,
    }
  };
}

export function submit(data, prefix, endpoint, headers, params, dispatch) {
  return (
    dispatch(post(data, prefix, endpoint, headers, params))
    // .then(() => {}) // do other actions here
  );
}