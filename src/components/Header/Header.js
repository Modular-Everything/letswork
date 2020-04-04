import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

// import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import Container from '../Container';
import Logo from '../Logo';

// ====================================

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteMeta {
      site {
        buildTime(fromNow: true)
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `);

  return (
    <HeaderWrap>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="author" content={data.site.siteMetadata.author} />
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

      <Container>
        <LogoWrapper>
          <Logo extend="test" status="beta" />
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
