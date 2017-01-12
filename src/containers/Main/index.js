import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

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
      <div>
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
