import React from 'react';
import { Link } from 'gatsby';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import Container from '../Container';
import Logo from '../Logo';
import ButtonPrimary from '../ButtonPrimary';
import ButtonTertiary from '../ButtonTertiary';

// ====================================

const PageHeader = () => {
  return (
    <Container>
      <PageHeaderWrap>
        <Copy>
          <p>
            <Logo extend="gether" />
            has been set up to promote creative freelancers and small agencies
            who are in need of work due to the COVID-19 pandemic.
          </p>
          <Link to="/about">
            <ButtonTertiary
              label="Find out more"
              fullWidth={false}
              dark
              size={1}
            />
          </Link>
        </Copy>
        <CTA>
          <a
            href="https://bit.ly/l-w-t"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonPrimary
              label="Creative Sign Up"
              microcopy="Always 100% Free"
            />
          </a>
        </CTA>
      </PageHeaderWrap>
    </Container>
  );
};

export default PageHeader;

// ====================================

const PageHeaderWrap = styled.section(
  tw`
    py-12
    sm:py-16
    lg:py-20 lg:grid
  `,
  css`
    & {
      grid-template-columns: 2fr 1fr 1fr;
    }
  `,
);

const Copy = styled.div(
  tw`
    text-black font-sans font-normal text-xl leading-snug
    sm:text-2xl
    lg:text-3xl
  `,
  css`
    & p {
      ${tw`mb-12`}
    }
  `,
);

const CTA = styled.div(
  tw`
    mt-8
    sm:flex sm:items-center
    lg:justify-center lg:mt-0
  `,
  css`
    grid-column: 3;
  `,
);
