import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import withContext from '../hoc/withContext';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    { children }
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};


export default withContext(UserPageTemplate);
