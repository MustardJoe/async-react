import { createStore, compose, applyMiddleware } from 'redux';
// import Thunk from 'redux-thunk';  master ryan doesn't have this line in his code
// so it probably isn't needed
import getRates from './services/ratesApi';

const logger = store => next => action => {

  const oldState = store.getState();
  /* eslint-disable-next-line no-console */
  console.log(action);
  next(action);

  const newState = store.getState();

  /* eslint-disable-next-line no-console */
  if(oldState !== newState) console.log('updated', newState);
};

const thunk = store => next => action => {
  if(typeof action === 'function') {
    action(store.dispatch);
  }
  else {
    next(action);
  }
};

const promiseMiddleware = store => next => action => {
  if(Promise.resolve(action.payload) === action.payload) {
    next({
      type: 'PENDING',
    });
    action.payload
      .then(data => {
        store.dispatch({
          type: action.type,
          payload: data,
        });
      });
  }
  else {
    next(action);
  }
};

function reducer(state = {}, action) {
  switch(action.type) {
    case 'FETCH_RATES':
      return action.payload;
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

// const fetchRates = () => ({
//   type: 'FETCH_RATES',
//   payload: getRates()
// });

store.dispatch({ type: 'LIKE CHEECH AND CHONG' });

store.dispatch({ type: 'HITS FROM THE BONG' });

// I think this is a different way to do the fetch thing, will play around with later
// const fetchRates = () => dispatch => {
//   fetch('https://api.ratesapi.io/api/latest?base=USD')
//     .then(res => res.json)
// }

// fetchRates is an action creator
// it returns a new style action (because the action is a function)
const fetchRates = () => dispatch => {
  fetch('https://api.ratesapi.io/api/latest?base=USD')
    .then(res => res.json())
    .then(rates => {
      dispatch({
        type: 'FETCH_RATES',
        payload: rates
      });
    });
};

store.dispatch(fetchRates());
