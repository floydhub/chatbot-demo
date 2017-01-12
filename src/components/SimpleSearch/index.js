import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Form } from 'react-bootstrap';

import FormControlGroupRF from 'components/Form/FormControlGroupRF';

// A simple search form with just an input field
const propTypes = {
  form: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
};

const defaultValues = {
  placeholder: 'Type something...',
  autoComplete: 'off',
};

class SimpleSearch extends Component {

  render() {
    const { onSearch, handleSubmit, className, placeholder, autoComplete } = this.props;

    return (
      <Form onSubmit={handleSubmit(onSearch)} className={className}>
        <Field
          id="modulesearchbox"
          name="search"
          type="text"
          placeholder={placeholder}
          component={FormControlGroupRF}
          autoComplete={autoComplete}
        />
      </Form>
    );
  }
}

SimpleSearch.propTypes = propTypes;
SimpleSearch.defaultValues = defaultValues;
SimpleSearch = reduxForm({
  //form: 'modulesearch', // Pass a unique form name as prop, e.g. <SimpleSearch form={id} />
})(SimpleSearch);

export default SimpleSearch;
