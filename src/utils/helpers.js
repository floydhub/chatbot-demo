import _ from 'lodash';
import jQuery from 'jquery';

// Converts an object into url params string
export function getUrlParams(params, noPrefix=false) {
  if(params == null) return '';
  if(noPrefix) return jQuery.param(params); 
  return '?' + jQuery.param(params);
}

// Filters an object `obj` to keep only items whose keys are specified in the array `arr`
// Returns an array of the filtered values, whose order is the samr as `arr`
export function filterObjByArray(obj, arr) {
  let filteredObjVals = [];
  arr.forEach((key) => {
    if (_.has(obj, key)) {
      filteredObjVals.push(obj[key]);
    }
  });
  return filteredObjVals;
}
