import React from 'react';
// import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import ButtonTertiary from '../ButtonTertiary';

// ====================================

const ProfileCard = () => {
  const UNSPLASH = [
    'rikonavt',
    'timetiff',
    'bormot',
    'bradleycdunn',
    'photologic',
    'bredi',
    'mackiec',
    'kobuagency',
    'ashkfor121',
  ];
  const RANDOM_IMAGE = UNSPLASH[Math.floor(Math.random() * UNSPLASH.length)];
  return (
    <Card>
      <a href="#">
        <MediaWrapper>
          <img
            src={`https://source.unsplash.com/user/${RANDOM_IMAGE}/664x470`}
            alt=""
          />
        </MediaWrapper>
        <MetaWrapper>
          <div>
            <MetaName>Leornado Da Vinci</MetaName>
            <MetaRole>Freelance</MetaRole>
          </div>
          <div>
            <MetaLocation>Vinci, Republic of Florence</MetaLocation>
          </div>
        </MetaWrapper>
        <ContactButton>
          <ButtonTertiary label="Contact Leonardo" />
        </ContactButton>
      </a>
    </Card>
  );
};

export default ProfileCard;

// ====================================

const Card = styled.li(
  tw`
    font-sans bg-white shadow-sm overflow-hidden rounded-md
  `,
);

const MediaWrapper = styled.div(
  tw`
    pb-2/3 relative
  `,
  css`
    & img {
      ${tw`
        object-cover h-full w-full absolute
      `}
    }
  `,
);

const MetaWrapper = styled.div(
  tw`
    p-5 text-olive
  `,
  css`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1.25rem;
  `,
);

const MetaName = styled.h2(
  tw`
    font-bold text-xl
  `,
);

const MetaRole = styled.h3(
  tw`
    text-base leading-tight
  `,
);

const MetaLocation = styled.small(
  tw`
    text-xs
  `,
);

const ContactButton = styled.div(
  tw`
    bg-lime p-5
  `,
);

// ====================================

// ProfileCard.propTypes = {};
