import React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

// ====================================

const Logo = () => {
  return (
    <Lockup>
      <li>let’s</li>
      <li>work</li>
      <li>.</li>
      <li>to</li>
      <li>/gether</li>
    </Lockup>
  );
};

export default Logo;

// ====================================

const Lockup = styled.ol(
  tw`
    flex tracking-normal
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
