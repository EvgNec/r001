import React from 'react';
import PropTypes from 'prop-types';

function PageTitle({ text }) {
  return <h1 className="title">{text}</h1>;
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
