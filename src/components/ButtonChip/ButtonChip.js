import React from 'react';
import PropTypes from 'prop-types';

// import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

// ====================================

const ButtonChip = (props) => {
  const { label, click } = props;
  return (
    <Chip type="button" onClick={click}>
      {label}
    </Chip>
  );
};

export default ButtonChip;

// ====================================

const Chip = styled.button(
  tw`
    py-2 px-4 font-sans bg-white shadow-md rounded-md text-left whitespace-no-wrap
  `,
);

// ====================================

ButtonChip.propTypes = {
  label: PropTypes.string.isRequired,
  click: PropTypes.string.isRequired,
};
