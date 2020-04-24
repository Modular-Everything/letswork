import React from 'react';
import PropTypes from 'prop-types';

// import { css } from '@emotion/core';
// import styled from '@emotion/styled/macro';
// import tw from 'twin.macro';

// ====================================

export const Form = (props) => {
  // type = 'text';
  // name = 'name';
  // placeholder = 'Forename Surname';
  // required;
  const { children, handleSubmit } = props;
  return <form onSubmit={handleSubmit}>{children}</form>;
};

// ================

export const Label = (props) => {
  const { htmlFor, children } = props;
  return <label htmlFor={htmlFor}>{children}</label>;
};

// ================

export const Input = (props) => {
  const { type, name, placeholder, required, onChange } = props;

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
};

// ====================================

Form.propTypes = {
  children: PropTypes.objectOf(PropTypes.node).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.node).isRequired,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  required: false,
};
