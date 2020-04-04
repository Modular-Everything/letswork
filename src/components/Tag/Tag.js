import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

// ====================================

const Tag = (props) => {
  const { label } = props;
  return <Item>{label}</Item>;
};

export default Tag;

// ====================================

const Item = styled.li(
  tw`
    bg-grass inline py-2 px-3 uppercase tracking-widest text-xs m-1 text-black
  `,
);

// ====================================

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};
