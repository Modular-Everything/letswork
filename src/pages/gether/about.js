import React from 'react';

import tw from 'twin.macro';
import styled from '@emotion/styled/macro';
import { css } from '@emotion/core';

import Layout from '../../components/Layout';
import Container from '../../components/Container';

// ====================================

const About = () => (
  <Layout>
    <Container>
      <Wrapper>
        <H2>About</H2>
        <P>
          Let’s Work Together was created to support those in the creative and
          digital sectors whose livelihoods have been directly affected by the
          COVID-19 crisis. We offer businesses unprecedented access to an
          impressive pool of talent.
        </P>

        <P>
          We believe in creating positive solutions to the crisis by leveraging
          talent that can help organisations come out of this stronger, with an
          enduring creative and digital presence.
        </P>

        <H2>Why work with us?</H2>

        <P>
          A global crisis presents opportunities for those who can adapt. While
          the tendency for many businesses will be to turn off the taps – cut
          losses, cut jobs – history suggests that doing so prompts economies to
          wither on the vine, making the problem worse.
        </P>

        <P>
          Initial support from most governments has been to provide dramatic
          financial stimulus and support. This will enable businesses and
          economies to recover faster.
        </P>

        <P>
          So now is not the time to retreat. Now is the time to innovate. Now is
          the time to work together.
        </P>

        <H2>An increasingly digital future</H2>

        <P>
          If one thing is certain, this crisis has dramatically increased our
          reliance on digital solutions. Websites, digital communication
          platforms and e-commerce will be more important than ever – as will
          creating a meaningful presence for your brand online. Businesses who
          get their websites and apps right, tied to savvy infrastructure, will
          benefit the most.
        </P>

        <H2>Why you should hire through us</H2>

        <P>
          Many creative industries have put the breaks on, freeing up in-demand
          talent. Everyone you see listed here has been dramatically affected
          and ready to work. Now is an opportunity to access experienced
          creatives who can transform your business and take your thought
          leadership to the next level.
        </P>

        <P>
          These are some of the most talented agencies and people in the world,
          and they are eager to do great work. By employing them to aid your
          business, you are directly contributing to our collective economic
          recovery.
        </P>

        <P>
          We know that those businesses who take advantage of this opportunity –
          who use this crisis chrysalis to create something new – will be
          rewarded for their innovation and commitment.
        </P>

        <H2>Contributors</H2>

        <P>
          This site would simply not be possible without the free time and
          commitment of the following people:
        </P>

        <P>
          <a href="http://tiac.design/">Andy Cooke</a>, Design, Brand
          Development
        </P>

        <P>
          <a href="https://chrish.design/">Chrish Dunne</a>, Web Design,
          Front-end Development
        </P>

        <P>
          <a href="http://compass.works/">Stephen Voisey</a>, Website concept,
          Marketing
        </P>

        <P>Jess Holl, Copywriting, Content Strategy</P>

        <H2>Supporters</H2>

        <H3>Airtable</H3>

        <P>
          A massive thank you to Airtable for offering us the free technology
          platform to build this solution and provide additional support and
          promotion.
        </P>
      </Wrapper>
    </Container>
  </Layout>
);

export default About;

// ====================================

const Wrapper = styled.div(
  tw`
    my-8 mx-auto w-10/12
    sm:my-16 sm:w-6/12
  `,

  css`
    & a:hover {
      ${tw`underline`}
    }
  `,
);

const H2 = styled.h2(
  tw`
    font-medium text-olive font-sans text-lg leading-relaxed mt-8 mb-2
    first:mt-0
  `,
);

const H3 = styled.h2(
  tw`
    font-medium text-black font-sans text-base leading-normal mt-8 mb-2
    first:mt-0
  `,
);

const P = styled.p(
  tw`
    text-gray-800 font-sans text-base text-black-light leading-relaxed mb-2
    last:mb-0
  `,
);
