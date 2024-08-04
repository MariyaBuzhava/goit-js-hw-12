import axios from 'axios';

const API_KEY = '45145101-fcee514389e5c9851c2eb0c8a';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page, perPage) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: perPage,
    },
  });
  return response.data;
}

// export async function fetchImages(query, page = 1) {
//   const params = {
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 15,
//     page: page,
//   };

//   try {
//     const response = await axios.get(BASE_URL, { params });
//     return response.data;
//   } catch (error) {
//     throw new Error('Failed to fetch images');
//   }
// }

// export async function fetchImages(query) {
//   const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch images');
//   }
//   return response.json();
// }
