import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CardWrapper from '../components/CardWrapper';
import ProfileCard from '../components/ProfileCard';

// ====================================

const Index = ({ data }) => {
  return (
    <Layout>
      <CardWrapper>
        {data.allAirtable.edges.map(({ node }) => {
          return (
            <ProfileCard
              key={node.id}
              city={node.data.City___Nearest_City}
              website={node.data.Website}
              firstName={node.data.Firstname}
              lastName={node.data.Lastname}
              email={node.data.Email}
              role={node.data.Type}
              country={node.data.Country[0].data.Name}
              images={node.data.Portfolio_Images___Your_Photos}
            />
          );
        })}
      </CardWrapper>
    </Layout>
  );
};

// ====================================

export default Index;

// ====================================

export const data = graphql`
  query AirtableQuery {
    allAirtable(filter: { queryName: { eq: "cards" } }) {
      edges {
        node {
          id
          data {
            City___Nearest_City
            Website
            Firstname
            Lastname
            Email
            Type
            Country {
              data {
                Name
              }
            }
            Portfolio_Images___Your_Photos {
              thumbnails {
                large {
                  height
                  url
                  width
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

Index.propTypes = {
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
