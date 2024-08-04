import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



let lightbox;

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
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
  `).join('');

  gallery.insertAdjacentHTML('beforeend', markup);

if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }

  // const lightbox = new SimpleLightbox('.gallery a');
  // lightbox.refresh();
}

export function renderError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    backgroundColor: "#ef4040",
    messageColor: "#fff",
    icon: "far fa-circle-xmark",
    iconColor: "#fff",
    position: 'topRight',
    timeout: 5000,
    close: true,
    progressBar: true,
  });
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function renderEndMessage() {
  iziToast.info({
    title: 'Info',
    message: "We're sorry, but you've reached the end of search results.",
    icon: 'fas fa-info-circle',
  });
}

// export function renderGallery(images) {
//   clearGallery();
//   const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
//     return `
//       <li class="gallery-item">
//         <a href="${largeImageURL}">
//           <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//         </a>
//         <div class="info">
//           <p>Likes: ${likes}</p>
//           <p>Views: ${views}</p>
//           <p>Comments: ${comments}</p>
//           <p>Downloads: ${downloads}</p>
//         </div>
//       </li>
//     `;
//   }).join('');
//   gallery.innerHTML = markup;
//   lightbox = new SimpleLightbox('.gallery a');
//   lightbox.refresh();
// }

// export function clearGallery() {
//   gallery.innerHTML = '';
// }


// export function renderError(message) {
//   iziToast.error({
//     message: message,
//     position: "topRight",
//     backgroundColor: "#ef4040",
//     messageColor: "#fff",
//     icon: "far fa-circle-xmark",
//     iconColor: "#fff"
//   });
// }

/* <p class="info-item"><i class="fas fa-thumbs-up"></i>${likes}</p>
        <p class="info-item"><i class="fas fa-eye"></i>${views}</p>
        <p class="info-item"><i class="fas fa-comments"></i>${comments}</p>
        <p class="info-item"><i class="fas fa-download"></i>${downloads}</p> */


