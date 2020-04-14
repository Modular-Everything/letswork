import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import Tag from '../Tag';

// ====================================

const Tags = (props) => {
  const { are: tags } = props;

  return (
    <TagContainer>
      {tags.map((tag) => (
        <Tag label={tag} />
      ))}
    </TagContainer>
  );
};

export default Tags;

// ====================================

const TagContainer = styled.ul(
  tw`
    flex -m-1 overflow-x-auto scrolling-touch
  `,
  css`
    -webkit-appearance: none;
  `,
);

// ====================================

Tags.propTypes = {
  are: PropTypes.arrayOf(PropTypes.string).isRequired,
};
