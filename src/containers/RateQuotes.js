import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rates from '../components/rates/Rates';
import { fetchRates } from '../actions/ratesActions';
import { getRates, getRatesLoading } from '../selectors/ratesSelectors';

class RateQuotes extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    rates: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { rates, loading } = this.props;
    if(loading) return <h1>LoAdInG1!1!</h1>;

    return <Rates rates={rates} />;
  }
}

const mapStateToProps = state => ({
  rates: getRates(state),
  loading: getRatesLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchRates());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RateQuotes);
