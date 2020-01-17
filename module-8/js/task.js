import items from './gallery-items.js';

const refs = {
  imageList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.lightbox'),
  image: document.querySelector('.lightbox__image'),
  button: document.querySelector('button[data-action="close-lightbox"]'),
};
items.forEach(imageItem => {
  refs.imageList.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__item">
        <img
          class="gallery__image"
          src="${imageItem.preview}"
          data-source="${imageItem.original}"
          alt="${imageItem.description}"
        />
      <a
        class="gallery__link"
        href="${imageItem.original}"
      >
        <span class="gallery__icon">
          <i class="material-icons">zoom_out_map</i>
        </span>
      </a>
    </li>`,
  );
});
function openPicture({ target }) {
  refs.lightbox.classList.add('is-open');
  refs.image.setAttribute('src', `${target.dataset.source}`);
  refs.image.setAttribute('alt', `${target.getAttribute('alt')}`);
  target.classList.add('active');
}
refs.imageList.addEventListener('click', openPicture);
function closePicture() {
  refs.lightbox.classList.remove('is-open');
  refs.image.src = '';
}
refs.button.addEventListener('click', closePicture);
