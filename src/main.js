
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, renderError, clearGallery } from './js/render-functions.js';


const form = document.querySelector('.search-form');
const input = form.querySelector('input[name="searchQuery"]');
const loader = document.getElementById('loader');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (query === '') {
    renderError('Please enter a search query.');
    return;
  }

    clearGallery();
    showLoader();
   
    try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      renderError("Sorry, there are no images matching your search query. Please try again!");
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    renderError(error.message);
  } finally {
    hideLoader();
  }
});

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
