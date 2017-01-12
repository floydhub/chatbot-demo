import _ from 'lodash';

// GET Request
export const GET_REQUEST = '_GET_REQUEST';
export const GET_SUCCESS = '_GET_SUCCESS';
export const GET_FAILURE = '_GET_FAILURE';

// POST Request
export const POST_REQUEST = '_POST_REQUEST';
export const POST_SUCCESS = '_POST_SUCCESS';
export const POST_FAILURE = '_POST_FAILURE';

// Combines the prefix with suffixes
export function combine(prefix, suffixes) {
  if (typeof suffixes === 'string') {
    return prefix + suffixes;
  }
  else if(Array.isArray(suffixes)) {
    const result = suffixes.map((suffix) => {
      return prefix + suffix;
    });
    return result;
  }
}

// Returns true if type (action.type) has the provided prefix
export function hasPrefix(type, prefix) {
  return _.startsWith(type, prefix);
}
