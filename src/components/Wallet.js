import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { balance } = this.props;
    return (
      <div>
        <h3 className="balance">Wallet balance: {balance}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({ balance: state });

export default connect(mapStateToProps)(Wallet);
