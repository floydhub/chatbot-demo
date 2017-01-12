import shortid from 'shortid';

import { search } from './commons';
import { users } from 'utils/constants';

export const prefix = 'MAIN'; // Prefix for common action types
export const endpoint = 'chat2'; // Endpoint for REST API requests

export function fetch(query, storeQuery) {
  return (dispatch) => {
    if (storeQuery) {
      dispatch({
        type: 'STORE_USER_CHAT',
        payload: {
          id: shortid.generate(),
          message: query,
          from: users.USER,
          time: Date.now(),
        }
      });
    }

    return search(query, prefix, endpoint, dispatch, {input: query});
  };
}

// // Submits an item to the backend for creation
// export function submitModule(data) {
//   // The data provided is of type FormData
//   const headers = {
//     Accept: 'application/json, application/xml, text/plain, text/html, *.*',
//     // 'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   };
//   return (dispatch, getState) => {
//     return submit(data, prefix, endpoint, headers, {}, dispatch);
//   };
// }
