import { buildUrl, handleInput } from './auxFunction.js';
import { createCard, createWarn } from './handleHtml.js';

const searchInput = document.querySelector('#city');
const cards = document.querySelector('.cards');

const fetchApi = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    createCard(result);
  } catch (err) {
    createWarn();
  }
};

searchInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    cards.innerHTML = '';
    const valueInput = searchInput.value;
    searchInput.value = '';
    const resultHandleInput = handleInput(valueInput);
    fetchApi(resultHandleInput);
  }
});

window.addEventListener('load', () => {
  const city = 'sao-paulo';
  const state = 'sp';
  const url = buildUrl(state, city);
  fetchApi(url);
});
