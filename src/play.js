import { createStore, compose, applyMiddleware } from 'redux';

const logger = store => next => action => {
  /* eslint-disable-next-line no-console */
  console.log(action);
  next(action);
  console.log(action);
  next(action);
  console.log(action);
  next(action);
};

function reducer(state = {}, action) {
  switch(action.type) {
    default:
      return state;
  }
}
const window = window || {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
  reducer, 
  composeEnhancers(applyMiddleware(logger)),
);

store.dispatch({ type: 'LIKE CHEECH AND CHONG' });

store.dispatch({ type: 'HITS FROM THE BONG' });

const fetchRates = () => dispatch => {
  fetch('https://api.ratesapi.io/api/latest?base=USD')
    .then(res => res.json)
}