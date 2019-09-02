import { getRates } from '../services/ratesApi';

export const FETCH_RATES = 'FETCH_RATES';
export const FETCH_RATES_LOADING = 'FETCH_RATES_LOADING';

//comented out code in the demo, not sure what it does...

export const fetchRates = () => ({
  type: FETCH_RATES,
  payload: getRates(),
  pendingType: FETCH_RATES_LOADING
});
