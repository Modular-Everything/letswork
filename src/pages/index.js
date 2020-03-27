import React from 'react';

import Layout from '../components/Layout';
import CardWrapper from '../components/CardWrapper';
import ProfileCard from '../components/ProfileCard';

// ====================================

const Index = () => {
  return (
    <Layout>
      <CardWrapper>
        <ProfileCard />
      </CardWrapper>
    </Layout>
  );
};

// ====================================

export default Index;
