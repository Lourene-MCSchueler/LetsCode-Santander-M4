import { buildUrl } from './auxFunction.js';
import { handleInput } from './events.js';
import { createCard } from './handleHtml.js';

const searchInput = document.querySelector('#city');

if (!searchInput.value === '') {
search()
  } else {
  window.addEventListener('load', () => {
    const city = 'sao-paulo';
    const state = 'sp';
    const url = buildUrl(state, city);
    fetchApi(url)
});

const fetchApi = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  insertCards(result);
};

const insertCards = (data) => {
  const array = data.search.result.listings;
  array.map((item) => createCard(item));
};

const search = () => {
  return searchInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const valueInput = searchInput.value;
      console.log(valueInput);
      searchInput.value = '';
      const resultHandleInput = handleInput(valueInput);
      fetchApi(resultHandleInput);
    }
  });
};

// window.addEventListener('load', () => {
//   const city = 'sao-paulo';
//   const state = 'sp';
//   const url = buildUrl(state, city);
//   fetchApi(url);
// });
