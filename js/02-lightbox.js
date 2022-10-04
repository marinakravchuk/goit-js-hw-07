import { galleryItems } from './gallery-items.js';
// Change code below this line

const getItems = document.querySelector('.gallery');

function onMarkUpImages (items) {
    return items.map(item => `<li class="gallery__item"><a class="gallery__link" href="${item.original}"/><img class="gallery__image" src="${item.preview}" alt="${item.description}"/></li>`).join('');
};

const callFunc = onMarkUpImages(galleryItems);
getItems.innerHTML = callFunc;

//============================================================

getItems.addEventListener('click', onMarkUpGallery);

function onMarkUpGallery (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    };
};
const lightbox =  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);