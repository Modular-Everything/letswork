import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import Container from '../Container';

// ====================================

const CardControls = ({ children }) => {
  return (
    <Container>
      <Controls>{children}</Controls>
    </Container>
  );
};

export default CardControls;

// ====================================

const Controls = styled.section(
  tw`
    flex items-center mt-16
  `,
  css`
    h2 {
      ${tw`
        mr-4
        sm:mr-8
      `}
    }
    h3 {
      ${tw`
        text-gray-500 text-sm ml-4
        sm:ml-8
      `}
    }
  `,
);

// ====================================

CardControls.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
