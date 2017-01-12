import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './style.css';
import 'static/styles/bootstrap-paper/bootstrap_paper.css';

const propTypes = {
};

const contextTypes = {
  router: PropTypes.object,
};

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height:'100%', width:'100%'}}>
        Inside Main Component
      </div>
    );
  }

}

Main.propTypes = propTypes;
Main.contextTypes = contextTypes;
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
