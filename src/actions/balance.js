import * as constants from './constants';

export const setBalance = balance => ({
  type: constants.SET_BALANCE,
  balance,
});

export const deposit = depositParan => ({
  type: constants.DEPOSIT,
  deposit: depositParan,
});

export const withdraw = withdrawl => ({
  type: constants.WITHDRAW,
  withdrawl,
});
