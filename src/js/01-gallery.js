// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const photoGalleryContainer = document.querySelector(".gallery");
console.log(photoGalleryContainer);
const photoMarkup = galleryMarkup(galleryItems);



photoGalleryContainer.insertAdjacentHTML("beforeend", photoMarkup);
photoGalleryContainer.addEventListener('click', onGalleryContainerClick); 

function galleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("");
};

function onGalleryContainerClick(evt) {
    evt.preventDefault();
 
    const isGalleryItemEl = evt.target.classList.contains('gallery__image');
 
    if (!isGalleryItemEl) {
        return;
    };
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
    
 instance.show()
        window.addEventListener("keydown", onEscapeClose,{once:true})  
              function onEscapeClose(evt) {
        if (evt.code === "Escape") {
            instance.close()
        }
        console.log(evt.code)
    }
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});