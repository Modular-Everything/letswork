import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// import tw from 'twin.macro';
// import styled from '@emotion/styled/macro';

import Layout from '../../components/Layout';
import CardWrapper from '../../components/CardWrapper';
import ProfileCard from '../../components/ProfileCard';

// ====================================

const UsefulLinks = ({ data }) => {
  return (
    <Layout>
      <CardWrapper>
        {data.allAirtable.edges.map((item) => (
          <ProfileCard
            key={item}
            tags={item.node.data.Tags}
            website={item.node.data.Link}
            firstName={`Visit ${item.node.data.Project_Name}`}
            role={item.node.data.Type}
            images={item.node.data.Featured_Image}
          />
        ))}
      </CardWrapper>
    </Layout>
  );
};

export default UsefulLinks;

// ====================================

export const data = graphql`
  query Links {
    allAirtable(filter: { queryName: { eq: "links" } }) {
      edges {
        node {
          data {
            Tags
            Project_Name
            Type
            About_the_Project
            Link
            Featured_Image {
              thumbnails {
                large {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

// ====================================

UsefulLinks.propTypes = {
  data: PropTypes.objectOf({
    allAirtable: PropTypes.objectOf({
      edges: PropTypes.arrayOf({
        City___Nearest_City: PropTypes.string.isRequired,
        Website: PropTypes.string.isRequired,
        Firstname: PropTypes.string.isRequired,
        Lastname: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
        Country: PropTypes.array.isRequired,
        Portfolio_Images___Your_Photos: PropTypes.array.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
