import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a string');
    } else {
      this._amount = amount;
      this._currency = currency;
    }
  }
}
