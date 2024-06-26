import getFullBudgetObject from './9-getFullBudget.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars (income) {
      return `$${income}`;
    },
    getIncomeInEuros (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}