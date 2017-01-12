import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import SimpleSearch from 'components/SimpleSearch';
import Chat from 'components/Chat';
import { fetch } from 'actions/main';
import { users } from 'utils/constants';

import './style.css';

const propTypes = {
};

const contextTypes = {
  router: PropTypes.object,
};

class Main extends Component {
  constructor(props) {
    super(props);
  }

  handleChatInput(data, dispatch) {
    dispatch(reset('chatInputForm')); // Reset the chat input text
    dispatch(fetch(data.search, true));
  }

  render() {
    const { conversations, payloads } = this.props;
    const { userInput, botOutput } = payloads;

    return (
      <div style={{height:'100%', width:'100%'}}>

        <div id="contentParent" className="responsive-columns-wrapper">

          {/** Chat Column */}
          <div id="chat-column-holder" className="responsive-column">
            <div className="chat-column">

              {/** Conversations */}
              <div id="scrollingChat">
                {conversations.map((chat, i) =>
                  <Chat key={chat.id} chat={chat} latest={i===(conversations.length-1) && chat.from===users.BOT}/>
                )}
              </div>

              {/** Chat Input Textbox */}
              <SimpleSearch
                form="chatInputForm"
                onSearch={this.handleChatInput}
                destroyOnUnmount={true}
                className="responsive-column"
                placeholder="Talk to me..."
                autoComplete="off"
              />
              
            </div>
          </div>

          {/** Payload Column */}
          <div id="payload-column" className="fixed-column content-column">
            {/** Payload Request */}
            <div id="payload-request" className="payload">
              <div className="header-text">User Input</div>
              <div className="code-line responsive-columns-wrapper">
                <pre className="line-numbers">
                </pre>
                <pre className="payload-text responsive-column">
                  {userInput.message}
                </pre>
              </div>
            </div>

            {/** Payload Response */}
            <div id="payload-response" className="payload">
              <div className="header-text">Model Output</div>
            </div>
          </div>

        </div>      
      </div>
    );
  }

}

Main.propTypes = propTypes;
Main.contextTypes = contextTypes;
const mapStateToProps = (state, ownProps) => {
  const { chats } = state;
  const { conversations, payloads } = chats;

  return {
    conversations,
    payloads
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
