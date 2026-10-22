import React from 'react';
import PropTypes from 'prop-types';

function PageTitle({pagetitle}) {
  return <div>{pagetitle}</div>;
}

PageTitle.propTypes = {
  pagetitle=PropTypes.string.isRequired,
};

export default PageTitle;
