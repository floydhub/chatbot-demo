import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

import { users } from 'utils/constants';

// A simple search form with just an input field
const propTypes = {
  chat: PropTypes.object.isRequired,
  latest: PropTypes.bool,
};

const defaultValues = {
  latest: false,
};

class Chat extends Component {

  render() {
    const { chat, latest } = this.props;

    return (
      <div className="segments load">
        <div className={classnames({'from-user': chat.from===users.USER
                                    , 'from-bot': chat.from===users.BOT, top: true, latest: latest})}>
          <div className="message-inner">
            <p>{chat.message}</p>
          </div>
        </div>
      </div>
    );
  }
}

Chat.propTypes = propTypes;
Chat.defaultValues = defaultValues;
export default Chat;
