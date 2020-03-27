import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';

// ====================================

const CardWrapper = ({ children }) => {
  return <Cards>{children}</Cards>;
};

export default CardWrapper;

// ====================================

const Cards = styled.section(
  css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    list-style: none;
  `,
);

// ====================================

CardWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.symbol).isRequired,
};
