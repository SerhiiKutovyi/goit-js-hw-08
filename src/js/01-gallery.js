import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

/* Добавь библиотеку SimpleLightbox как зависимость проекта используя npm*/
console.log(galleryItems);
const refGallery = document.querySelector('.gallery');
console.log(refGallery);

const newItem = galleryItems
  .map(
    item => `<div class="gallery__item">
  <a class="lazyload" href = "${item.original}">
  <img class = loading='lazy' src="${item.preview}"  alt = "${item.description}"/>
  </div>`
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
