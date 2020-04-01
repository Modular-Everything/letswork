import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CardWrapper from '../components/CardWrapper';
import ProfileCard from '../components/ProfileCard';

// ====================================

const Index = ({ data: query }) => {
  const [asc, setAsc] = useState(true);
  const sortedData = Object.keys(query.allAirtable.edges).sort((a, b) => {
    const x = query.allAirtable.edges[a].node.data.Firstname.toUpperCase();
    const y = query.allAirtable.edges[b].node.data.Firstname.toUpperCase();

    if (!asc) {
      if (x > y) {
        return -1;
      }
      if (x < y) {
        return 1;
      }
    } else {
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
    }
    return 0;
  });

  return (
    <Layout>
      <button type="button" onClick={() => setAsc(!asc)}>
        Sort {!asc ? 'Z-A' : 'A-Z'}
      </button>

      <CardWrapper>
        {sortedData.map((item) => {
          const { data } = query.allAirtable.edges[item].node;
          return (
            <ProfileCard
              key={item}
              city={data.City___Nearest_City}
              website={data.Website}
              firstName={data.Firstname}
              lastName={data.Lastname}
              email={data.Email}
              role={data.Type}
              country={data.Country[0].data.Name}
              images={data.Portfolio_Images___Your_Photos}
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
