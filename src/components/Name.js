import React from 'react';
import PropTypes from 'prop-types';

function Name(props) {
  return (
    <h1>Hello {props.name}</h1>
  );
}

Name.propTypes = {
  name: PropTypes.string.isRequired
};

export default Name;