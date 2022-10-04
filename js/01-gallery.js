import { galleryItems } from "./gallery-items.js";

const getGalleryImages = document.querySelector(".gallery");


function createGalleryList(items) {
	return items.map((item) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img src="${item.preview}" data-source="${item.original}" alt="${item.description}" class="gallery__image" /></a></div>`).join("");
}

const listItemsMarkUp = createGalleryList(galleryItems);
getGalleryImages.innerHTML = listItemsMarkUp; 


//=========================================================

getGalleryImages.addEventListener("click", onClickImages);

function onClickImages(event) {
    event.preventDefault();
   
	 if (event.target.nodeName !== "IMG") {
        return;
	}  
    
	const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`);
	instance.show();

    getGalleryImages.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            instance.close();
        }
    }); 
};



console.log(galleryItems);