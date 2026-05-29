import './css/styles.css';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function clearGallery() {
  gallery.innerHTML = '';
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
        closeButton: true,
        backgroundColor: '#ef4040',
        messageColor: '#fafafb',
        iconUrl: '',
        icon: '',
      });
      return;
    }

    const markup = renderImages(data.hits);
    gallery.innerHTML = markup;

    lightbox.refresh();
    form.reset()
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});