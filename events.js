import { buildUrl } from './auxFunction.js';

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
    //targetInput = '';
    return resultUrl;
  } else if (
    inputFormat === 'rj' ||
    inputFormat === 'rio de janeiro' ||
    inputFormat === 'rio janeiro'
  ) {
    let state = 'rj';
    let city = 'rio-de-janeiro';
    let resultUrl = buildUrl(state, city);
    //targetInput = '';
    return resultUrl;
  }
  //targetInput = '';
  return 'Opssss';
};
