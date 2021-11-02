export const buildUrl = (state, city) => {
  const url = 'https://private-9e061d-piweb.apiary-mock.com/venda';
  return `${url}?state=${state}&city=${city}`;
};
