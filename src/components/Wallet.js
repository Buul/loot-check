import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = { balanceValue: undefined };
  }

  updateBalance = event => this.setState({ balanceValue: parseInt(event.target.value, 10) });

  deposit = () => {
    const { balanceValue } = this.state;
    const { deposit: depositFunc } = this.props;
    depositFunc(balanceValue);
  };

  withdraw = () => {
    const { balanceValue } = this.state;
    const { withdraw: withdrawFunc } = this.props;
    withdrawFunc(balanceValue);
  };

  render() {
    const { balance } = this.props;
    const { balanceValue } = this.state;
    return (
      <div>
        <h3 className="balance">Wallet balance: {balance}</h3>
        <br />
        <input value={balanceValue || ''} className="input-wallet" onChange={this.updateBalance} />
        <button type="submit" className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
        <button type="submit" className="btn-withdraw" onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

Wallet.propTypes = {
  balance: PropTypes.number,
  deposit: PropTypes.func,
  withdraw: PropTypes.func,
};

Wallet.defaultProps = {
  balance: 0,
  deposit: () => {},
  withdraw: () => {},
};

const mapStateToProps = state => ({ balance: state.balance });

const mapDispatchToProps = {
  deposit,
  withdraw,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
