import React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import Container from '../Container';
import Logo from '../Logo';

// ====================================

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <ComingSoon>
          <h1>
            Coming soon{' '}
            <span role="img" aria-label="Shifty eyes">
              👀
            </span>
          </h1>
          <p>
            We&lsquo;re working hard to get this ready, please check back soon.
          </p>
        </ComingSoon>
      </Container>
    </HeaderWrap>
  );
};

export default Header;

// ====================================

const HeaderWrap = styled.header(
  tw`
    bg-grass py-8 mb-16 h-screen
  `,
);

const LogoWrapper = styled.div(
  tw`
    text-2xl
  `,
);

const ComingSoon = styled.div(
  tw`
    mt-4 text-olive
  `,

  css`
    & h1 {
      ${tw`font-bold`}
    }
  `,
);
