export const getRates = () => {
  return fetch('https://api.ratesapi.io/api/latest?base=USD')
    .then(res => {
      if(!res.ok) throw 'Unable to get rates';

      return res.json();
    })
    .then(json => {
      return Object.entries(json.reates)
        .map(entry => ({
          name: entry[0],
          quote: entry[1],
        }));
    });
};
