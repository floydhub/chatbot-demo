import _ from 'lodash';
import shortid from 'shortid';

import { users } from 'utils/constants';
import * as at from 'actions/actionTypes';
import { prefix } from 'actions/main';

const getRequest = at.combine(prefix, at.GET_REQUEST);
const getSuccess = at.combine(prefix, at.GET_SUCCESS);
const getFailure = at.combine(prefix, at.GET_FAILURE);

function mainStoreReducer(state = {}, action) {
  switch (action.type) {
    case 'STORE_USER_CHAT':
      let oldConversations = _.clone(state.conversations);
      return _.merge({}, state, {
        conversations: _.concat(oldConversations, action.payload),
        payloads: {
          userInput: { message: action.payload.message },
        }
      })
    case getRequest:
      return _.merge({}, state, {
        isFetching: true,
        payloads: {
          botOutput: { message: 'Fetching response from server...' }
        }
      });
    case getSuccess:
      oldConversations = _.clone(state.conversations);

      let a = _.trimStart(action.payload.output, 'b\'');
      a = _.trimEnd(a, '\\n\'');
      let i;
      for (i=0; i<10; i++) {
        a = _.replace(a, '\\\\\\', '');
      }
      // a = _.replace(a, RegExp('/\\\\\\/', "g"), '');
      console.log('Output: ', a);
      let j = JSON.parse(a);
      console.log('JSON: ', JSON.parse(a))
      const response = j[0][0].tgt.join(' ');
      console.log(response)
      return _.assign({}, state, {
        isFetching: false,
        conversations: _.concat(oldConversations, {
          id: shortid.generate(),
          message: response,
          from: users.BOT,
          time: Date.now(),
        }),
        payloads: _.merge({}, state.payloads, {
          botOutput: { message: JSON.stringify(j, null, 2) }
        }),
        lastUpdated: Date.now(),
      });
    case getFailure:
      return _.merge({}, state, {
        isFetching: false,
        payloads: {
          botOutput: { message: 'ERROR: Failed to fetch response from server...' }
        }
      });
    default:
      return state;
  }
}

export default mainStoreReducer;
