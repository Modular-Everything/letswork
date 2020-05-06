import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { css } from '@emotion/core';
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
    <BG>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="author" content={data.site.siteMetadata.author} />
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

      <Container>
        <Wrapper>
          <LogoSizer>
            <Logo extend="gether" status="beta" />
          </LogoSizer>
          <Navigation role="navigation">
            <ul>
              <Link to="/gether" activeClassName="active">
                Home
              </Link>
              <Link to="/gether/about" activeClassName="active">
                About
              </Link>
            </ul>
          </Navigation>
        </Wrapper>
      </Container>
    </BG>
  );
};

export default Header;

// ====================================

const BG = styled.header(
  tw`
    bg-grass py-8
  `,
);

// ======

const Wrapper = styled.div(
  tw`
    flex flex-row justify-between items-center
  `,
);

// ======

const LogoSizer = styled.div(
  tw`
    text-2xl
  `,
);

// ======

const Navigation = styled.nav(
  css`
    & a {
      ${tw`
        text-olive mr-8 last:mr-0
      `}

      &:hover {
        ${tw`underline`}
      }
    }

    & .active {
      ${tw`text-tree`}
    }
  `,
);

// ====================================
