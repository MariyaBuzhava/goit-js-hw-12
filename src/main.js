
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, renderError, clearGallery, renderEndMessage } from './js/render-functions.js';


const form = document.querySelector('.search-form');
// const input = form.querySelector('input[name="searchQuery"]');
const loader = document.getElementById('loader');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
const perPage = 15;
let totalHits = 0;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  query = event.target.elements.searchQuery.value.trim();
  if (query === '') {
    renderError('Please enter a search query.');
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreBtn();
  showLoader();
   
    try {
      const data = await fetchImages(query, page, perPage);
      totalHits = data.totalHits;
    if (totalHits === 0) {
      renderError("Sorry, there are no images matching your search query. Please try again!");
    } else {
      renderGallery(data.hits);
      if (data.hits.length < perPage || page * perPage >= totalHits) {
        hideLoadMoreBtn();
      } else {
        showLoadMoreBtn();
      }
      // if (data.hits.length === 15) {
      //   showLoadMoreBtn();
      // }
    }
  } catch (error) {
    renderError(error.message);
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();
  hideLoadMoreBtn();

  try {
    const data = await fetchImages(query, page, perPage);
    renderGallery(data.hits);
    smoothScroll();

     if (data.hits.length < perPage || page * perPage >= totalHits) {
      hideLoadMoreBtn();
      renderEndMessage();
    } else {
      showLoadMoreBtn();
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

function showLoadMoreBtn() {
  loadMoreBtn.style.display = 'block';
}

function hideLoadMoreBtn() {
  loadMoreBtn.style.display = 'none';
}

function smoothScroll() {
  const galleryCard = document.querySelector('.gallery-item');
  if (galleryCard) {
    const cardHeight = galleryCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 4,
      behavior: 'smooth',
    });
  }
}

  const input = document.querySelector('input[name="searchQuery"]');

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.style.borderColor = '#4e75ff';
    } else {
      input.style.borderColor = '#808080';
    }
  });
