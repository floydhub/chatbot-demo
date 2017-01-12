import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

class App extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
  }

  render() {
    const { children } = this.props;

    return (
      <div className="">
      
        <div className="">
          {React.cloneElement(children)}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapsDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

App.propTypes = propTypes;
App.contextTypes = contextTypes;
export default connect(
  mapStateToProps,
  mapsDispatchToProps
)(App);
