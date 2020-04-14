import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

// ====================================

const ButtonPrimary = (props) => {
  const { label, microcopy } = props;

  return (
    <ButtonWrapper>
      <Button>{label}</Button>
      {microcopy && <MicroCopy>{microcopy}</MicroCopy>}
    </ButtonWrapper>
  );
};

export default ButtonPrimary;

// ====================================

const ButtonWrapper = styled.div(
  tw`
    flex flex-col
  `,
);

const Button = styled.div(
  tw`
    py-3 px-8 text-grass bg-black rounded-md font-medium text-center text-base
    sm:text-xl sm:py-4 sm:px-10 
  `,
);

const MicroCopy = styled.small(
  tw`
    text-center text-xs text-black mt-6
  `,
);

// ====================================

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  microcopy: PropTypes.string,
};

ButtonPrimary.defaultProps = {
  microcopy: null,
};
