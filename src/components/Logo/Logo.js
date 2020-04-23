import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

// ====================================

const Logo = (props) => {
  const { extend, status } = props;

  return (
    <Link
      to="/gether"
      css={css`
        &:hover {
          ${tw`text-lime`}
          text-decoration: underline;
        }
      `}
    >
      <Lockup>
        <li>let’s</li>
        <li>work</li>
        <li>.</li>
        <li>to</li>
        {extend && <li>/{extend}</li>}
        {status && <li className="status">{status}</li>}
      </Lockup>
    </Link>
  );
};

export default Logo;

// ====================================

const Lockup = styled.ol(
  tw`
    tracking-normal mr-1 font-sans
  `,

  css`
    display: inline-flex;

    & li {
      &:nth-of-type(1) {
        color: #85c339;
      }
      &:nth-of-type(2) {
        color: #65ac2a;
      }
      &:nth-of-type(3) {
        color: #7dff00;
      }
      &:nth-of-type(n + 4) {
        color: #418d37;
      }
      &.status {
        color: #d7f1b7;
        padding-left: 0.25rem;
      }
    }
  `,
);

// ====================================

Logo.propTypes = {
  extend: PropTypes.string,
  status: PropTypes.string,
};

Logo.defaultProps = {
  extend: null,
  status: null,
};
