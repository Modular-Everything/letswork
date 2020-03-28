import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import { hasProtocol } from '../../helpers';
import ButtonTertiary from '../ButtonTertiary';

// ====================================

const ProfileCard = (props) => {
  const { city, website, firstName, lastName, role, country, images } = props;
  const IMG_SRC = images[0].thumbnails !== null ? images[0].thumbnails : null;

  console.log(images[0].thumbnails);

  return (
    <Card>
      <a href={hasProtocol(website)} target="_blank" rel="noopener noreferrer">
        <MediaWrapper>
          {IMG_SRC !== null && (
            <img
              src={images[0].thumbnails.large.url}
              alt={`Images of ${firstName}'s work`}
              width={images[0].thumbnails.large.width}
              height={images[0].thumbnails.large.height}
            />
          )}
        </MediaWrapper>
        <MetaWrapper>
          <div>
            <MetaName>
              {firstName} {lastName}
            </MetaName>
            <MetaRole>{role}</MetaRole>
          </div>
          <div>
            <MetaLocation>
              {city}, {country}
            </MetaLocation>
          </div>
        </MetaWrapper>
        <ContactButton>
          <ButtonTertiary label={`Contact ${firstName}`} />
        </ContactButton>
      </a>
    </Card>
  );
};

export default ProfileCard;

// ====================================

const Card = styled.li(
  tw`
    font-sans bg-white shadow-md overflow-hidden rounded-md
  `,
);

const MediaWrapper = styled.div(
  tw`
    pb-2/3 relative bg-grass
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

ProfileCard.propTypes = {
  city: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  images: PropTypes.arrayOf({
    thumbnails: PropTypes.objectOf({
      large: PropTypes.objectOf({
        url: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
