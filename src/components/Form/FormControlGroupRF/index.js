import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

// A complete form field component for use with redux-form's Field
// Comprises of FormGroup, ControlLabel, FormControl, Feedback and HelpBlock 
class FormControlGroupRF extends Component {
  render() {
    const { input, id, label, help, type, placeholder, meta: { touched, error }, ...rest } = this.props;

    return (
      <FormGroup
        { ...touched && error ? {validationState: 'error'} : {}}
        controlId={id}
      >
        {label && <ControlLabel><strong>{label}</strong></ControlLabel>}
        <FormControl {...input} type={type} placeholder={placeholder} {...rest} />
        <FormControl.Feedback />
        {touched && error && <span><HelpBlock>{error}</HelpBlock></span>}
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }
}

export default FormControlGroupRF;
