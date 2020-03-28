import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

// ====================================

const Logo = (props) => {
  const { extend } = props;

  return (
    <Lockup>
      <li>let’s</li>
      <li>work</li>
      <li>.</li>
      <li>to</li>
      {extend && <li>/{extend}</li>}
    </Lockup>
  );
};

export default Logo;

// ====================================

const Lockup = styled.ol(
  tw`
    flex tracking-normal mr-1
  `,

  css`
    li {
      &:nth-of-type(1) {
        color: #85c339;
      }
      &:nth-of-type(2) {
        color: #65ac2a;
      }
      &:nth-of-type(3) {
        color: #65ac2a;
      }
      &:nth-of-type(n + 3) {
        color: #418d37;
      }
    }
  `,
);

// ====================================

Logo.propTypes = {
  extend: PropTypes.string,
};

Logo.defaultProps = {
  extend: null,
};
