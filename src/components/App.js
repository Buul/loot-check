/* eslint-disable import/no-named-as-default */
import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

const App = () => (
  <div>
    <h1>Loot Check</h1>
    <hr />
    <Wallet />
    <hr />
    <Loot />
    <div>
      Powered by <a href="https://www.coindesk.com/price/bitcoin">Coindesk</a>
    </div>
  </div>
);

export default App;
