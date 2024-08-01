import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
let lightbox;

export function renderGallery(images) {
  clearGallery();
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p>Likes: ${likes}</p>
          <p>Views: ${views}</p>
          <p>Comments: ${comments}</p>
          <p>Downloads: ${downloads}</p>
        </div>
      </li>
    `;
  }).join('');
  gallery.innerHTML = markup;
  lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}


export function renderError(message) {
  iziToast.error({
    message: message,
    position: "topRight",
    backgroundColor: "#ef4040",
    messageColor: "#fff",
    icon: "far fa-circle-xmark",
    iconColor: "#fff"
  });
}


