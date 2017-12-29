import React from 'react';
import PropTypes from 'prop-types';

// export default () => {
//   return <div>not found, 404</div>
// }

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

const NotFound = ({ location }) => (
  <div>
    <h3>not found, 404, <code>{location.pathname}</code></h3>
  </div>
);

NotFound.propTypes = propTypes;

export default NotFound;
