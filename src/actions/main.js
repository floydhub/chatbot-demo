import { search } from './commons';

export const prefix = 'MAIN'; // Prefix for common action types
export const endpoint = 'xxxxx/'; // Endpoint for REST API requests

export function fetch(query, storeQuery=true) {
  return (dispatch) => {
    return search(query, prefix, endpoint, dispatch, storeQuery);
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
