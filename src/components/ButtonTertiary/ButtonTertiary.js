import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import Arrow from '../../../static/symbols/arrow.svg';

// ====================================

const ButtonTertiary = (props) => {
  const { label } = props;

  return (
    <ButtonWrapper>
      {label}
      <ArrowScaler>
        <img src={Arrow} alt="→" />
      </ArrowScaler>
    </ButtonWrapper>
  );
};

export default ButtonTertiary;

// ====================================

const ButtonWrapper = styled.div(
  tw`
    flex flex-row justify-between text-xl text-grass
  `,
);

const ArrowScaler = styled.span(
  tw`
    object-cover w-4 flex items-center
  `,
  css`
    & img {
      ${tw`w-full`}
    }
  `,
);

// ====================================

ButtonTertiary.propTypes = {
  label: PropTypes.string.isRequired,
};
