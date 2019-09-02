export const getRates = state => state.rates.rates;
export const getRatesLoading = state => state.rates.loading;
export const getRatesError = state => state.rates.error;
export const getTotalRates = state => getRates(state).length;
export const getAveRate = state => {
  return getRates(state)
    .reduce((sum, rate) => sum + rate) / getTotalRates(state);
};
