import React from 'react';

// import { css } from '@emotion/core';
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
      </Container>
    </HeaderWrap>
  );
};

export default Header;

// ====================================

const HeaderWrap = styled.header(
  tw`
    bg-grass py-8
  `,
);

const LogoWrapper = styled.div(
  tw`
    text-2xl
  `,
);
