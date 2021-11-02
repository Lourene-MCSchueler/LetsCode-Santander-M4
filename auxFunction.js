export const buildUrl = (state, city) => {
  const url = 'https://private-9e061d-piweb.apiary-mock.com/venda';
  return `${url}?state=${state}&city=${city}`;
};

export const handleInput = (targetInput) => {
  let inputFormat = targetInput.trim().toLowerCase();
  if (
    inputFormat === 'sp' ||
    inputFormat === 'sao paulo' ||
    inputFormat === 'são paulo'
  ) {
    let state = 'sp';
    let city = 'sao-paulo';
    let resultUrl = buildUrl(state, city);
    return resultUrl;
  } else if (
    inputFormat === 'rj' ||
    inputFormat === 'rio de janeiro' ||
    inputFormat === 'rio janeiro'
  ) {
    let state = 'rj';
    let city = 'rio-de-janeiro';
    let resultUrl = buildUrl(state, city);
    return resultUrl;
  } else {
    return inputFormat;
  }
};
