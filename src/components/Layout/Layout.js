import React from 'react';
import PropTypes from 'prop-types';

import PageHeader from '../PageHeader';
import Header from '../Header';

// ====================================

const Layout = ({ children }) => (
  <main>
    <PageHeader />
    <Header />
    {children}
  </main>
);

// ====================================

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
