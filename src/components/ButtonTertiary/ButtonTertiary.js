import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import Arrow from '../../../static/symbols/arrow.svg';

// ====================================

const ButtonTertiary = (props) => {
  const { label, fullWidth, dark, size } = props;

  return (
    <ButtonWrapper
      css={[
        fullWidth
          ? tw`justify-between`
          : css`
              & img {
                margin-left: 4rem;
              }
            `,
        size === 1 ? tw`text-base` : tw`text-xl`,
      ]}
    >
      <span css={[dark ? tw`text-black` : tw`text-grass`]}>{label}</span>
      <ArrowScaler css={[size === 1 ? tw`w-3` : tw`w-4`]}>
        <img src={Arrow} alt="→" />
      </ArrowScaler>
    </ButtonWrapper>
  );
};

export default ButtonTertiary;

// ====================================

const ButtonWrapper = styled.div(
  tw`
    flex flex-row text-xl
  `,
  css`
    &:hover span {
      text-decoration: underline;
    }
  `,
);

const ArrowScaler = styled.span(
  tw`
    object-cover flex items-center
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
  fullWidth: PropTypes.bool,
  dark: PropTypes.bool,
  size: PropTypes.number,
};

ButtonTertiary.defaultProps = {
  fullWidth: true,
  dark: false,
  size: 3,
};
