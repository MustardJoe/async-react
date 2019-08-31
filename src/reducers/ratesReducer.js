import { FETCH_RATES } from '../actions/ratesActions';

const initialState = {
  rates: [],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_RATES:
      return { ...state, rates: action.payload, loading: false };
    default:
      return state;
  }
}
