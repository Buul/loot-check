import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount() {
    const { fetchBitcoin: fetchBitcoinAction } = this.props;
    fetchBitcoinAction();
  }

  computeBitcoin() {
    const { bitcoin, balance } = this.props;
    if (Object.keys(bitcoin).length === 0) return '';

    return balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }

  render() {
    return <h3>Bitcoin balance: {this.computeBitcoin()}</h3>;
  }
}

Loot.propTypes = {
  balance: PropTypes.number,
  fetchBitcoin: PropTypes.func,
  bitcoin: PropTypes.shape({}),
};

Loot.defaultProps = {
  balance: 0,
  fetchBitcoin: () => {},
  bitcoin: PropTypes.shape({}),
};

const mapStateToProps = state => ({ balance: state.balance, bitcoin: state.bitcoin });

const mapDispatchToProps = {
  fetchBitcoin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loot);
