import React from 'react';
import PropTypes from 'prop-types';

function Rate({ rate }) {
  return (
    <p>{rate.name} - {rate.quote}</p>
  );
}

Rate.propTypes = {
  rate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quote: PropTypes.number.isRequired,
  }),
};

export default Rate;
