import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

// ====================================

const Container = (props) => {
  const { children } = props;
  return <PageContainer>{children}</PageContainer>;
};

export default Container;

// ====================================

const breakpoints = [640, 768, 1024, 1280];
const PageContainer = styled.div(
  tw`
    mx-auto
    px-4
    w-full
  `,
  css`
    ${breakpoints.map(
      (minWidth) =>
        `@media(min-width: ${minWidth}px) { max-width: ${minWidth}px }`,
    )}
  `,
);

// ====================================

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ====================================
