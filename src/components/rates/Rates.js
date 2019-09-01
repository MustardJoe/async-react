import React from 'react';
import PropTypes from 'prop-types';
import Rate from './Rate';

function Rates({ rates }) {
  const rateElements = rates.map(rate => (
    <li key={rate.name}>
      <Rate rate={rate} />
    </li>
  ));

  return (
    <ul>{rateElements}</ul>
  );
}

Rates.propTypes = {
  rates: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quote: PropTypes.number.isRequired,
  }))
};

export default Rates;
