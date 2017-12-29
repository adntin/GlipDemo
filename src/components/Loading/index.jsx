import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  error: PropTypes.string.isRequired,
  timedOut: PropTypes.string.isRequired,
  pastDelay: PropTypes.string.isRequired,
};

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  }
  return null;
}

Loading.propTypes = propTypes;

export default Loading;

