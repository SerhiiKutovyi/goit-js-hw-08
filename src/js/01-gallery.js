import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

/* Добавь библиотеку SimpleLightbox как зависимость проекта используя npm*/

const refGallery = document.querySelector('.gallery');

const newItem = galleryItems
  .map(
    item => `
  <a class="gallery__item" href = "${item.original}">
  <img class="gallery__image" src="${item.preview}"  alt = "${item.description}"/>
  </a>`
  )
  .join('');

refGallery.innerHTML = newItem;
refGallery.addEventListener('click', openItemsClick);

function openItemsClick(event) {
  event.preventDefault();

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
