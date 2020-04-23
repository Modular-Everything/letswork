import React from 'react';
import { Helmet } from 'react-helmet';

// ====================================

const Index = () => {
  return (
    <>
      <Helmet>
        <meta httpEquiv="refresh" content="0; URL='/gether'" />
      </Helmet>
    </>
  );
};

export default Index;
